import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) 
  {
    this.user$ = afAuth.authState;
  }

  public user$: Observable<firebase.User>;

  login() {
    const returnURL = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnURL', returnURL);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
