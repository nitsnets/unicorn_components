import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../models/user';

@Injectable()
export class AuthenticationService {

  activeUser: User;

  constructor(private router: Router) { }

  logout() {
    // Clean this.activeUser or localstorage.activeUser and navigate to login
    this.router.navigate(['/login']);
  }

  login(user: User) {
    // Call API method, and store the token inside this.activeUser and localstorage
  }

  checkLogin(): boolean {
    // Check this.activeUser or localstorage.activeUser

    return true;
  }
}
