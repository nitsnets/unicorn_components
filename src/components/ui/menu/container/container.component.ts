import { Component, ElementRef, HostBinding } from '@angular/core';

@Component({
    selector: 'uni-menu-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class UniMenuContainerComponent {

    @HostBinding('class.uni-menu-container') componentClass = true;

    constructor(public elementRef: ElementRef) { }
}
