import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: LoginService, private userService: UserService) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.pipe(
      switchMap(
        user => {
          this.userService.get(user.uid);
        }
    ));
  }
}
