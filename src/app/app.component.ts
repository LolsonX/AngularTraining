import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: LoginService, router: Router) {
    auth.user$.subscribe(user => {
       if (user) {
        userService.save(user); 
        const returnURL = localStorage.getItem('returnURL');
        router.navigateByUrl(returnURL);
       }
    });
  }
}
