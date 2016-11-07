import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {
    items: Object[];

    constructor() {
        this.items = [
            { path: '/dashboard', icon: 'bars' },
            { path: '/users', icon: 'user' }
        ];
    }

    ngOnInit() {
    }

}
