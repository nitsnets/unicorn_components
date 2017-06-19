import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'uni-clock',
    templateUrl: 'clock.component.html',
    styleUrls: ['clock.component.scss'],
})
export class UniClockComponent implements OnChanges {
    @Input() ntsModel;
    @Output() ntsModelChange = new EventEmitter();

    mode: String;
    hoursModes = {
        AM: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        PM: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    };

    hours: String[] = this.hoursModes['AM'];
    minutes: String[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

    hour: number;
    hourIndex: number;
    hourDegrees: number;

    minute: number;
    minuteIndex: number;
    minuteDegrees: number;

    constructor() { this.initValue(); }

    ngOnChanges(changes) { if (this.ntsModel) { this.updateValue(); } else { this.initValue(); } }

    selectMode(mode) { this.setMode(mode); this.applyValue(); }
    selectHour(hour) { this.hourIndex = hour; this.apply(); }
    selectMinute(minute) { this.minuteIndex = minute; this.apply(); }

    private setMode(mode) {
        this.mode = mode;
        this.hours = this.hoursModes[mode];
    }
    private apply() {
        this.applyValue();
        this.applyDegrees();
    }
    private applyDegrees() {
        this.minuteDegrees = 6 * this.minute;
        this.hourDegrees = 30 * (this.hour % 12) + this.minuteDegrees / 12;
    }
    private applyValue() {
        const hourStr = this.hours[this.hourIndex];
        const minuteStr = this.minutes[this.minuteIndex];
        this.hour = +hourStr;
        this.minute = +minuteStr;
        this.ntsModelChange.emit(hourStr + ':' + minuteStr);
    }
    private updateValue() {
        // Get hour and minute string from input hh:mm
        const timeSplitted = this.ntsModel.split(':');
        const hour = timeSplitted[0];
        const minute = timeSplitted[1];
        // Set the clock hours and minutes as integers
        this.hour = +hour;
        this.minute = +minute;
        // Set the right mode
        if (+hour > 11) {
            this.setMode('PM');
        } else { this.setMode('AM'); }
        // Set the clock indexes to highlight the numbers
        this.hourIndex = this.hours.indexOf(hour);
        this.minuteIndex = this.minutes.indexOf(minute);

        this.applyDegrees();
    }
    private initValue() {
        this.setMode('AM');
        this.hour = 0;
        this.hourIndex = 0;
        this.hourDegrees = 0;
        this.minute = 0;
        this.minuteIndex = 0;
        this.minuteDegrees = 0;
    }
}
