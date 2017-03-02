import { Component, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'nts-menu-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss'],
})
export class NtsMenuItemComponent {
    @Input() icon = '';

    constructor(public elementRef: ElementRef) { }
}
