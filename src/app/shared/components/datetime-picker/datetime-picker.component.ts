import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'go-datetime-picker',
    templateUrl: 'datetime-picker.component.html',
    styleUrls: ['datetime-picker.component.scss'],
})
export class GoDatetimePickerComponent implements OnChanges {
    @Input() date: String; // 'YYYY-MM-DD'
    @Input() time: String; // 'HH:MM'

    @Output() dateChange = new EventEmitter();
    @Output() timeChange = new EventEmitter();

    constructor() { }

    ngOnChanges(changes) {

    }

    onDateChanges(date) {
        this.date = date;
        this.dateChange.emit(date);
    }
    onTimeChanges(time) {
        this.time = time;
        this.timeChange.emit(time);
    }
    clear() {
        this.onDateChanges(null);
        this.onTimeChanges(null);
    }
}
