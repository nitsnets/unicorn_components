import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NtsInputBaseComponent } from '../../base/input-base.component';

export type InputType = 'text' | 'number' | 'email' | 'password' | 'color';

@Component({
    selector: 'nts-input',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.scss'],
})
export class NtsInputComponent extends NtsInputBaseComponent implements OnInit {

    @Input() type: InputType = 'text';
    @Input() max = -1;
    @Input() step = 1;

    @Input() icon: string;
    @Input() iconRight: string;

    @Input() placeholder: string = '';
    @Input() prefix = '';
    @Input() hint: string = '';
    @Input() error: string = '';
    @Input() counter = false;

    @Input() maxValue: number = null;
    @Input() minValue: number = null;

    @Input() floating = false;
    @Input() floatingLabel = false;
    @Input() multiline = false;
    @Input() autofocus = false;
    @Input() clear = false;
    @Input() caret = false;
    @Input() colorSwatch = false;

    @Output() ntsKeypress = new EventEmitter();

    focused = false;

    ngOnInit() {
        if (!this.ntsModel) {
            this.ntsModel = this.value;
        } else {
            this.value = this.ntsModel;
        }
    }
    onInputFocus(ev) {
        this.focused = true;
        this.ntsFocus.emit(ev);
    }
    onInputBlur(ev) {
        this.focused = false;

        if (this.maxValue && this.ntsModel > this.maxValue) {
            this.ntsModel = this.maxValue;
            this.ntsModelChange.emit(this.ntsModel);

        } else if (this.minValue && this.ntsModel < this.minValue) {
            this.ntsModel = this.minValue;
            this.ntsModelChange.emit(this.ntsModel);
        }
        this.ntsBlur.emit(ev);
    }
}
