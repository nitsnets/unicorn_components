import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { NtsInputBaseComponent } from '../../base/input-base.component';
import { Observable } from 'rxjs/Rx';
import { conformToMask } from 'angular2-text-mask';

// https://github.com/text-mask/text-mask/tree/master/angular2

export type InputType = 'text' | 'number' | 'email' | 'password' | 'color';
export type MaskArray = (string | RegExp)[];
@Component({
    selector: 'nts-input',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.scss'],
})
export class NtsInputComponent extends NtsInputBaseComponent implements OnInit, OnChanges {

    @Input() type: InputType = 'text';
    @Input() max = -1;
    @Input() step = 1;

    @Input() icon: string;
    @Input() iconRight: string;

    @Input() placeholder = '';
    @Input() prefix = '';
    @Input() hint = '';
    @Input() mask = '';
    @Input() error = '';
    @Input() counter = false;

    @Input() maxValue: number = null;
    @Input() minValue: number = null;

    @Input() readonly = false;
    @Input() floating = false;
    @Input() multiline = false;
    @Input() autofocus = false;
    @Input() clear = false;
    @Input() colorSwatch = false;
    @Input() caret = false;

    @Output() ntsKeypress = new EventEmitter();

    focused = false;
    _mask: MaskArray = null;

    ngOnChanges(changes) {
        if (changes.mask && this.mask) {
            this.parseMask();
        }
        if (changes.ntsModel) {
            this.applyMask();
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
    onNgModelChange(ev): Observable<any> {
        if (this.type === 'number') {
            ev = parseFloat(ev.replace(',', '.'));
        }
        return super.onNgModelChange(ev);
    }
    private applyMask() {
        if (!this._mask || !this.ntsModel) { return; }
        console.log(conformToMask(this.ntsModel, this._mask, {}).conformedValue);
        // this.ntsModel = conformToMask(this.ntsModel, this._mask, {}).conformedValue;
    }
    private parseMask(): MaskArray {
        if (typeof this.mask !== 'string') { return this.mask; }
        this._mask = this.mask.split('').map(c => {
            switch (c) {
                case '9': return /\d/;
                case 'A': return /[A-Z]/;
                case 'a': return /[a-z]/;
                case 'x': return /[A-z]/;
                case 'X': return /[A-z|\d]/;
                default: return c;
            }
        });
    }
}
