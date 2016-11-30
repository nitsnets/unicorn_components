import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'go-dropdown-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss'],
})
export class GoDropdownItemComponent {
    @Input() icon = '';

    constructor(public elementRef: ElementRef) { }
}
