import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { UniBaseComponent } from '../../base/base.component';

@Component({
    selector: 'uni-accordion',
    templateUrl: 'accordion.component.html',
    styleUrls: ['accordion.component.scss'],
})
export class UniAccordionComponent extends UniBaseComponent {
    @Input() menu = false;

    @HostBinding('class.collapsed')
    @Input() collapsed = true;
    @Output() collapsedChange = new EventEmitter();

    constructor() {
        super();
    }
}
