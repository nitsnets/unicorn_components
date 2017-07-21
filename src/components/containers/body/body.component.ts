import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'uni-body',
    templateUrl: 'body.component.html',
    styleUrls: ['body.component.scss'],
})
export class UniBodyComponent {

    @HostBinding('class.uni-body') componentClass = true;
    constructor() { }
}
