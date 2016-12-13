import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nts-radio',
    templateUrl: 'radio.component.html',
    styleUrls: ['radio.component.scss'],
})
export class NtsRadioComponent implements OnInit {

    @Input() name: string = '';
    @Input() value: string = '';
    @Input() color: string = '';
    @Input() label: string;
    @Input() partial: boolean = false;
    @Input() ntsModel: boolean = false;
    @Output() ntsModelChange = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onChange() {
        this.ntsModelChange.emit(this.value);
    }

}
