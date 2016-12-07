import { Component, OnInit } from '@angular/core';

import { User } from '../../../shared/models/user';
import { AuthenticationService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'nts-avatar',
    templateUrl: 'avatar.component.html',
    styleUrls: ['avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
    user: User;
    popupOpened: boolean;

    constructor(private authService: AuthenticationService,
        private router: Router) {
    }

    ngOnInit() {
        // this.user = this.authService.activeUser;
        this.authService.activeUser.subscribe(
            user => {
                this.user = user;
            }
        );
    }
    logout() {
        this.authService.logout();
    }
    ntsUserProfile() {
        this.popupOpened = false;
        this.router.navigate(['/profile']);
    }

}
