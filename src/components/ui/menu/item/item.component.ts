import { Component, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'uni-menu-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss'],
})
export class UniMenuItemComponent {
    @Input() icon = '';

    constructor(public elementRef: ElementRef) { }
}
