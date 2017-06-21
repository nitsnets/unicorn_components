import { Component, ElementRef, Input } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component';
import { sideOfScreen } from '../../../utils';

@Component({
    selector: 'uni-time-picker',
    templateUrl: 'time-picker.component.html',
    styleUrls: ['time-picker.component.scss'],
})
export class UniTimePickerComponent extends UniInputBaseComponent {

    @Input() inline = false;

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
        this.uniFocus.emit($event);
    }
    onBlur($event) {
        this.uniBlur.emit($event);
    }
    onKeyPress(ev: KeyboardEvent) {
        if (ev.code === 'Enter' || ev.key === 'Enter') {
            this.opened = false;
        } else { this.opened = true; }
    }
    onTimeChanges(date) {
        this.uniModel = date;
        this.onNgModelChange(date);
    }
    clear() {
        this.onNgModelChange(null);
    }
}
