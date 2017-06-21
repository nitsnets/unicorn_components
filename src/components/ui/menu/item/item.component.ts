import { Component, ElementRef, Input } from '@angular/core';

import { UniBaseComponent } from '../../../base/base.component';

@Component({
    selector: 'uni-menu-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss'],
})
export class UniMenuItemComponent extends UniBaseComponent {
    @Input() icon = '';

    constructor(public elementRef: ElementRef) {
        super();
    }
}
