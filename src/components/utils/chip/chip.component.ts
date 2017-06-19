import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'uni-chip',
    templateUrl: 'chip.component.html',
    styleUrls: ['chip.component.scss'],
})
export class UniChipComponent {

    @Input() removable = false;
    @Input() icon = null;
    @Input() label = '';

    @Output() remove = new EventEmitter();


    constructor() { }
}
