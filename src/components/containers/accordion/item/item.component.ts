import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { UniBaseComponent } from '../../../base/base.component';

@Component({
    selector: 'uni-accordion-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss'],
})
export class UniAccordionItemComponent extends UniBaseComponent {

    @HostBinding('class.uni-accordion-item') componentClass = true;
    @Input() menu = false;

    @HostBinding('class.collapsed')
    @Input() collapsed = true;
    @Output() collapsedChange = new EventEmitter<boolean>();

    constructor() {
        super();
    }

    onCollapsedChange(value) {
        this.collapsedChange.emit(value);
    }
}
