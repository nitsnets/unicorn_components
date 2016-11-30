import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../models/user';

@Injectable()
export class AuthenticationService {

  activeUser: User;

  constructor(private router: Router) { }

  logout() {
    // Call API method
    this.activeUser = null;
    localStorage.removeItem('activeUser');
    this.router.navigate(['/login']);
  }

  login(user: User) {
    // Call API method
    user.token = 'THIS TOKEN MUST BE GIVEN BY THE API';

    this.activeUser = user;
    localStorage.setItem('activeUser', JSON.stringify(user));
    this.router.navigate(['/']);
  }

  checkLogin(): boolean {
    let loggedIn = this.isLoggedIn();

    if (loggedIn) {
      return true;
    } else { this.logout(); }
    return false;
  }

  isLoggedIn(): boolean {
    if (this.activeUser && this.activeUser.token) { return true; }
    let activeUser = User.newFromJSON(localStorage.getItem('activeUser'));
    if (activeUser && activeUser.token) { return true; }
    return false;
  }
}
