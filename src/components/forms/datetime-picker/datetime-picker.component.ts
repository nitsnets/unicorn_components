import { Component, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base/input-base.component';

@Component({
    selector: 'uni-datetime-picker',
    templateUrl: 'datetime-picker.component.html',
    styleUrls: ['datetime-picker.component.scss'],
})
export class UniDatetimePickerComponent extends UniInputBaseComponent {

    @HostBinding('class.uni-datetime-picker') componentClass = true;
    @Input() timeLabel: String;
    @Input() dateLabel: String;

    @Input() floating = true;

    @Input() maxDate;
    @Input() minDate;

    @Input() maxTime;
    @Input() minTime;

    @Input() rangeFrom;
    @Input() rangeTo;

    constructor(private elementRef: ElementRef) {
        super();
    }

    onDateChanges(date) {
        const newModel = this.model || {};
        newModel['date'] = date;
        this.modelChange.emit(newModel);
    }
    onTimeChanges(time) {
        const newModel = this.model || {};
        newModel['time'] = time;
        this.modelChange.emit(newModel);
    }
    clear() {
        this.onDateChanges(null);
        this.onTimeChanges(null);
    }
}
