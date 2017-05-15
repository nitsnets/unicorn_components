import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'nts-chip',
    templateUrl: 'chip.component.html',
    styleUrls: ['chip.component.scss'],
})
export class NtsChipComponent {

    @Input() removable = false;
    @Input() icon = null;
    @Input() label = '';

    @Output() remove = new EventEmitter();


    constructor() { }
}
