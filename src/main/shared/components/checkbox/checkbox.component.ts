import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'go-checkbox',
    templateUrl: 'checkbox.component.html',
    styleUrls: ['checkbox.component.scss'],
})
export class GoCheckboxComponent implements OnInit {

    @Input() name: string = '';
    @Input() partial: boolean = false;
    @Input() goModel: boolean = false;
    @Output() goModelChange = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onChange(value) {
        this.goModelChange.emit(value);
    }

}
