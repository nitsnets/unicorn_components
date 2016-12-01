import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'nts-dropdown-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class NtsDropdownContainerComponent {
    constructor(public elementRef: ElementRef) { }
}
