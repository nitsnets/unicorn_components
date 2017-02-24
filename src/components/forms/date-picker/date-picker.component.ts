import { Component, ElementRef, Input } from '@angular/core';

import { NtsInputBaseComponent } from '../../base/input-base.component';
import { sideOfScreen } from '../../../utils';

@Component({
    selector: 'nts-date-picker',
    templateUrl: 'date-picker.component.html',
    styleUrls: ['date-picker.component.scss'],
})
export class NtsDatePickerComponent extends NtsInputBaseComponent {

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
