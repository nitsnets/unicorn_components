import { Component, ElementRef, Input } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component';
import { sideOfScreen } from '../../../utils';

@Component({
    selector: 'uni-date-picker',
    templateUrl: 'date-picker.component.html',
    styleUrls: ['date-picker.component.scss'],
})
export class UniDatePickerComponent extends UniInputBaseComponent {

    @Input() inline = false;

    @Input() maxDate;
    @Input() minDate;

    @Input() rangeFrom;
    @Input() rangeTo;

    side = 'left';
    private _opened = false;
    set opened(value: boolean) {
        this._opened = value;
        if (value && !this.inline && this.elementRef) {
            this.side = sideOfScreen(this.elementRef.nativeElement);
        }
    }
    get opened() { return this._opened; }

    constructor(private elementRef: ElementRef) { super(); }

    onFocus($event) {
        this.opened = true;
        this.ntsFocus.emit($event);
    }
    onBlur($event) {
        this.ntsBlur.emit($event);
    }
    onKeyPress(ev: KeyboardEvent, open: boolean) {
        if (ev.code === 'Enter' || ev.key === 'Enter') {
            this.opened = false;
        } else { this.opened = open; }
    }
    onDateChanges(date) {
        this.ntsModel = date;
        this.onNgModelChange(date);
    }
    clear() {
        this.onNgModelChange(null);
    }
}
