import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'uni-datetime-picker',
    templateUrl: 'datetime-picker.component.html',
    styleUrls: ['datetime-picker.component.scss'],
})
export class UniDatetimePickerComponent {

    @Input() dateModel: String; // 'YYYY-MM-DD'
    @Input() dateLabel: String;
    @Output() dateChange = new EventEmitter();

    @Input() timeModel: String; // 'HH:MM'
    @Input() timeLabel: String;
    @Output() timeChange = new EventEmitter();

    @Input() inline = false;

    @Input() maxDate;
    @Input() minDate;

    @Input() rangeFrom;
    @Input() rangeTo;

    constructor(private elementRef: ElementRef) { }

    onDateChanges(date) {
        this.dateModel = date;
        this.dateChange.emit(date);
    }
    onTimeChanges(time) {
        this.timeModel = time;
        this.timeChange.emit(time);
    }
    clear() {
        this.onDateChanges(null);
        this.onTimeChanges(null);
    }
}
