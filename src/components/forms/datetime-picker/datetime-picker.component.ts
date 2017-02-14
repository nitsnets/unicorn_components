import { Component, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { sideOfScreen } from '../../../utils';

@Component({
    selector: 'nts-datetime-picker',
    templateUrl: 'datetime-picker.component.html',
    styleUrls: ['datetime-picker.component.scss'],
})
export class NtsDatetimePickerComponent implements OnChanges {

    @Input() dateShow = true;
    @Input() dateModel: String; // 'YYYY-MM-DD'
    @Input() dateLabel: String;
    @Output() dateChange = new EventEmitter();

    @Input() timeShow = true;
    @Input() timeModel: String; // 'HH:MM'
    @Input() timeLabel: String;
    @Output() timeChange = new EventEmitter();

    @Input() popup = false;
    @Input() keepOpen = false;

    @Input() maxDate;
    @Input() minDate;

    @Input() rangeFrom;
    @Input() rangeTo;

    mode = null;
    side = 'left';

    constructor(private elementRef: ElementRef) { }

    ngOnChanges(changes) {
        if (changes.keepOpen && this.keepOpen && !this.popup) {
            this.setMode('date');
        }
    }

    setMode(mode: 'time' | 'date', event = null) {
        this.mode = mode;
        if (mode && this.popup && this.elementRef) {
            this.side = sideOfScreen(this.elementRef.nativeElement);
        }
    }
    onKeyPress(ev: KeyboardEvent, mode: 'time' | 'date') {
        if (ev.code === 'Enter' || ev.key === 'Enter') {
            this.setMode(null);
        } else { this.setMode(mode); }
    }
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
