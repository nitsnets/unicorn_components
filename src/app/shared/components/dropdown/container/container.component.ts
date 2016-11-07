import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'go-dropdown-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss'],
})
export class GoDropdownContainerComponent {
    constructor(public elementRef: ElementRef) { }
}
