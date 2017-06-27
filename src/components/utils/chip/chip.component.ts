import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UniBaseComponent } from '../../base/base.component';

@Component({
    selector: 'uni-chip',
    templateUrl: 'chip.component.html',
    styleUrls: ['chip.component.scss'],
})
export class UniChipComponent extends UniBaseComponent {

    @Input() icon = null;
    @Input() closable = false;
    @Output() close = new EventEmitter();


    constructor() { super(); }
}
