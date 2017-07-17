import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { UniInputBaseComponent } from '../../base/input-base.component';
import { UniOption } from './../../../models/option';
import { conformToMask } from 'angular2-text-mask';

// https://github.com/text-mask/text-mask/tree/master/angular2

export type InputType = 'text' | 'number' | 'email' | 'password' | 'color';
export type MaskArray = (string | RegExp)[];
@Component({
    selector: 'uni-input',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.scss'],
})
export class UniInputComponent extends UniInputBaseComponent implements OnInit, OnChanges {

    @Input() type: InputType = 'text';
    @Input() max = -1;

    @Input() icon: string;
    @Input() iconRight: string;

    @Input() placeholder = '';
    @Input() prefix = '';
    @Input() prefixIcon = '';
    @Input() suffix = '';
    @Input() suffixIcon = '';
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

    @Input() chips: string[] | UniOption[];
    @Input() chipsChange = new EventEmitter<string[] | UniOption[]>();
    @Input() deleteChip = new EventEmitter<number>();

    @Output() uniKeypress = new EventEmitter();

    focused = false;
    _mask: MaskArray = null;

    ngOnChanges(changes) {
        if (changes.mask && this.mask) {
            this.parseMask();
        }
        if (changes.model) {
            this.applyMask();
        }
    }
    onInputFocus(ev) {
        this.focused = true;
        this.uniFocus.emit(ev);
    }
    onInputBlur(ev) {
        this.focused = false;

        if (this.maxValue && this.model > this.maxValue) {
            this.model = this.maxValue;
            this.modelChange.emit(this.model);

        } else if (this.minValue && this.model < this.minValue) {
            this.model = this.minValue;
            this.modelChange.emit(this.model);
        }
        this.uniBlur.emit(ev);
    }
    onNgModelChange(ev): Observable<any> {
        if (this.type === 'number') {
            ev = parseFloat(ev.replace(',', '.'));
        }
        return super.onNgModelChange(ev);
    }
    onRemoveChip(index: number) {
        if (index < 0 || index >= this.chips.length) { return; }
        this.chips.splice(index, 1);
        this.chipsChange.emit(this.chips);
        this.deleteChip.emit(index);
    }
    private applyMask() {
        if (!this._mask || !this.model) { return; }
        console.log(conformToMask(this.model, this._mask, {}).conformedValue);
        // this.model = conformToMask(this.model, this._mask, {}).conformedValue;
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
