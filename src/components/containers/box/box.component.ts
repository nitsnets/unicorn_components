import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'uni-box',
    templateUrl: 'box.component.html',
    styleUrls: ['box.component.scss'],
})
export class UniBoxComponent {

    @HostBinding('class.uni-box') componentClass = true;
    constructor() { }
}
