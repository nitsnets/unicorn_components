import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'nts-radio',
    templateUrl: 'radio.component.html',
    styleUrls: ['radio.component.scss'],
})
export class NtsRadioComponent implements OnInit {

    @Input() name: string = '';
    @Input() value: string = '';
    @Input() label: string;
    @Input() ntsModel: boolean = false;
    @Output() ntsModelChange = new EventEmitter();

    constructor() { }

    ngOnInit() { }


}
