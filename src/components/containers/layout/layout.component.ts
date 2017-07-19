import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'uni-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss'],
})
export class UniLayoutComponent {

    @HostBinding('class.uni-layout') componentClass = true;
    constructor() { }
}
