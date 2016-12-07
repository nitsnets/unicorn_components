import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nts-chip',
    templateUrl: 'chip.component.html',
    styleUrls: ['chip.component.scss'],
})
export class NtsChipComponent {

    @Input() removable = false;
    @Input() label = '';

    @Output() remove = new EventEmitter();


    constructor() { }
}
