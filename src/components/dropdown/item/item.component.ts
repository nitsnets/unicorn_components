import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'nts-dropdown-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss'],
})
export class NtsDropdownItemComponent {
    @Input() icon = '';

    constructor(public elementRef: ElementRef) { }
}
