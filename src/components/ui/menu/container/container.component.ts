import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'nts-menu-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class NtsMenuContainerComponent {
    constructor(public elementRef: ElementRef) { }
}
