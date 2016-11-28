import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'go-datetime-picker',
    templateUrl: 'datetime-picker.component.html',
    styleUrls: ['datetime-picker.component.scss'],
})
export class GoDatetimePickerComponent implements OnChanges {

    @Input() dateShow = true;
    @Input() dateModel: String; // 'YYYY-MM-DD'
    @Input() dateLabel: String;
    @Output() dateChange = new EventEmitter();

    @Input() timeShow = true;
    @Input() timeModel: String; // 'HH:MM'
    @Input() timeLabel: String;
    @Output() timeChange = new EventEmitter();

    @Input() popup = false;

    @Input() maxDate;
    @Input() minDate;

    mode = null;

    constructor() { }

    ngOnChanges(changes) { }

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
