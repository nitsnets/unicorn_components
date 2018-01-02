import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { UniInputBaseComponent } from '../../base/input-base/input-base.component';
import { UniOption } from './../../../models/option';

// https://github.com/text-mask/text-mask/tree/master/angular2

export type InputType = 'text' | 'number' | 'email' | 'password' | 'color';
export type MaskArray = (string | RegExp)[];
@Component({
    selector: 'uni-input',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.scss'],
})
export class UniInputComponent extends UniInputBaseComponent implements OnInit {
    @HostBinding('class.uni-input') componentClass = true;
    @HostBinding('class.uni-input--focused') focused = false;
    @HostBinding('class.uni-input--has-label') get hasLabel() { return this.label && this.label.length; }
    @HostBinding('class.uni-input--has-content') get hasContent() { return this.model && this.model.length; }
    @HostBinding('class.uni-input--with-suffix') get hasSuffix() { return this.suffix || this.suffixIcon; }
    @HostBinding('class.uni-input--with-chips') get hasChips() { return this.chips && this.chips.length; }
    @HostBinding('class.uni-input--with-icon') get hasIcon() { return this.icon; }
    @HostBinding('class.uni-input--with-icon-right') get hasIconRight() { return this.iconRight || this.clear; }
    @HostBinding('class.uni-input--with-two-icon-right') get hasTwoIconRight() { return this.iconRight && this.clear }
    @HostBinding('class.uni-input--with-prefix') get hasPrefix() {
        return this.prefix ||
            this.prefixIcon ||
            this.type === 'color';
    }

    @HostBinding('class.uni-input--floating')
    @Input() floating = false;
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
    @Input() error = '';
    @Input() counter = false;

    @Input() maxValue: number = null;
    @Input() minValue: number = null;

    @Input() readonly = false;
    @Input() multiline = false;
    @Input() autofocus = false;
    @Input() clear = false;
    @Input() colorSwatch = false;
    @Input() caret = false;

    @Input() chips: string[] | UniOption[];
    @Input() chipsChange = new EventEmitter<string[] | UniOption[]>();
    @Input() deleteChip = new EventEmitter<number>();

    @Output() uniKeypress = new EventEmitter();
    @Output() enter = new EventEmitter();

    onKeyPress(event: KeyboardEvent) {
        this.uniKeypress.emit(event);
        if (event.key === 'Enter') {
            this.enter.emit(event);
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
}
