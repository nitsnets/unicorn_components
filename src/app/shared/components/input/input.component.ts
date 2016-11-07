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
    @Input() multiline = false;
    @Input() prefix = '';
    @Input() max = -1;
    @Input() step = 1;
    @Input() counter = false;
    @Input() autofocus = false;
    @Input() clear = false;
    @Input() caret = false;

    // formControl = new NgControl();

    constructor() { }

    ngOnInit() {
        if (!this.goModel) {
            this.goModel = this.value;
        } else {
            this.value = this.goModel;
        }
        if (this.debounce) {

            /* TODO: Re-implementar el debounce con NgControl o similar
             * (http://stackoverflow.com/questions/36919011/how-to-add-debounce-time-to-an-async-validator-in-angular-2)
             */

            // this.formControl.valueChanges.debounceTime(this.debounce || 0).subscribe(
            //     (newValue) => {
            //         if (this.goModel === newValue) { return; }
            //         this.goModel = newValue;
            //         this.goModelChange.emit(newValue);
            //     }
            // );

        }
    }
    onNgModelChange(ev) {
        // if (!this.debounce) {
        this.goModelChange.emit(ev);
        // }
    }
}
