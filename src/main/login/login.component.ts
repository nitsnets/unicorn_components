import { Component } from '@angular/core';

import { AuthenticationService } from './../shared/services/auth.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = new User({});

  constructor(
    private authService: AuthenticationService
  ) {

  }

  doLogin(event) {
    this.authService.login(this.user);
  }
}
