import { Component, EventEmitter, Input, Output, HostBinding } from '@angular/core';

import { UniBaseComponent } from '../../base/base.component';

@Component({
    selector: 'uni-chip',
    templateUrl: 'chip.component.html',
    styleUrls: ['chip.component.scss'],
})
export class UniChipComponent extends UniBaseComponent {

    @HostBinding('class.uni-chip') componentClass = true;
    @Input() icon = null;
    @Input() removable = false;
    @Output() remove = new EventEmitter();


    constructor() { super(); }

    onRemove(event) {
        event.stopPropagation();
        event.preventDefault();
        this.remove.emit(event);
    }
}
