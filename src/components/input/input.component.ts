import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum InputTypes { text, number, email, password }

@Component({
    selector: 'go-input',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.scss'],
})
export class GoInputComponent implements OnInit {

    @Input() goModel;
    @Output() goModelChange = new EventEmitter();
    @Output() goBlur = new EventEmitter();
    @Output() goFocus = new EventEmitter();

    @Input() type: InputTypes = InputTypes.text;
    @Input() placeholder: string = '';
    @Input() name: string = '';
    @Input() label: string = '';
    @Input() value: string = '';
    @Input() icon: string;
    @Input() iconRight: string;
    @Input() hint: string = '';
    @Input() error: string = '';
    @Input() floating = false;
    @Input() debounce = 0;
    @Input() colorType = false;
    @Input() multiline = false;
    @Input() prefix = '';
    @Input() max = -1;
    @Input() step = 1;
    @Input() counter = false;
    @Input() autofocus = false;
    @Input() clear = false;
    @Input() caret = false;
    @Input() required = false;

    debounceTimer: NodeJS.Timer;

    constructor() { }

    ngOnInit() {
        if (!this.goModel) {
            this.goModel = this.value;
        } else {
            this.value = this.goModel;
        }
    }
    onNgModelChange(ev) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(
            _ => this.goModelChange.emit(ev), this.debounce || 0
        );
    }
}
