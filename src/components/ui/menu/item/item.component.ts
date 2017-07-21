import { Component, ElementRef, Input, HostBinding } from '@angular/core';

import { UniBaseComponent } from '../../../base/base.component';

@Component({
    selector: 'uni-menu-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss'],
})
export class UniMenuItemComponent extends UniBaseComponent {

    @HostBinding('class.uni-menu-item') componentClass = true;
    @Input() icon = '';

    constructor(public elementRef: ElementRef) {
        super();
    }
}
