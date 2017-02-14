import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nts-checkbox',
    templateUrl: 'checkbox.component.html',
    styleUrls: ['checkbox.component.scss'],
})
export class NtsCheckboxComponent implements OnInit {

    @Input() name: string = '';
    @Input() label: string;
    @Input() partial: boolean = false;
    @Input() ntsModel: boolean = false;
    @Output() ntsModelChange = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onChange(value) {
        this.ntsModelChange.emit(value);
    }

}
