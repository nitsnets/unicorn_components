import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'uni-menu-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class UniMenuContainerComponent {
    constructor(public elementRef: ElementRef) { }
}
