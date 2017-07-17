import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { pad } from '../../../utils';

const HOUR_PATTERN = /^(\d|[01]\d|2[0-3]):?([0-5]\d)$/;

@Component({
    selector: 'uni-clock',
    templateUrl: 'clock.component.html',
    styleUrls: ['clock.component.scss'],
})
export class UniClockComponent implements OnChanges {
    @Input() model = '00:00';
    @Output() modelChange = new EventEmitter();

    @Input() set min(value: string) {
        if (!HOUR_PATTERN.test(value)) { console.warn(`Invalid hour format: ${value}`); return; }
        const arr = value.split(':');
        this.hourMin = +arr[0];
        this.minuteMin = +arr[1];
        this.refreshModeAvailability();
        this.refreshHoursAvailable();
        this.refreshMinutesAvailable();

        const { hour, minute } = this.getHourMinuteFromModel();
        this.updateValue(hour, minute);

    };
    @Input() set max(value: string) {
        if (!HOUR_PATTERN.test(value)) { console.warn(`Invalid hour format: ${value}`); return; }
        const arr = value.split(':');
        this.hourMax = +arr[0];
        this.minuteMax = +arr[1];
        this.refreshModeAvailability();
        this.refreshHoursAvailable();
        this.refreshMinutesAvailable();

        this.updateValueFromModel();
    };

    mode: 'AM' | 'PM' = 'AM';
    modeAvailability = {
        AM: true,
        PM: true
    };
    hoursModes = {
        AM: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
        PM: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    };

    hours: string[] = this.hoursModes['AM'];
    minutes: string[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
    minutesAvailable: boolean[] = this.minutes.map(h => true);
    hoursAvailable: boolean[] = this.hours.map(h => true);

    hour = 0;
    hourIndex = 0;
    hourDegrees = 0;
    hourMax = 23;
    hourMin = 0;

    minute = 0;
    minuteIndex = 0;
    minuteDegrees = 0;
    minuteMax = 59;
    minuteMin = 0;

    ngOnChanges(changes) {
        if(changes.model) {
            this.updateValueFromModel();
            this.refreshHoursAvailable();
            this.refreshMinutesAvailable();
        }
    }

    selectMode(mode) {
        if (!this.modeAvailability[mode]) { return; }
        this.setMode(mode);

        this.updateValueFromIndex();
        this.refreshHoursAvailable();
        this.refreshMinutesAvailable();
    }
    selectHour(index) {
        if (!this.hoursAvailable[index]) { return; }
        this.hourIndex = index;

        this.updateValueFromIndex();
        this.refreshMinutesAvailable();
    }
    selectMinute(index) {
        if (!this.minutesAvailable[index]) { return; }
        this.minuteIndex = index;
        this.updateValueFromIndex();
    }
    private refreshModeAvailability() {
        this.modeAvailability = {
            AM: this.hourMin < 12,
            PM: this.hourMax >= 12
        };
    }
    private refreshHoursAvailable() {
        this.hoursAvailable = this.hours.map(h => +h >= this.hourMin && +h <= this.hourMax);
    }
    private refreshMinutesAvailable() {
        if (this.hour > this.hourMin && this.hour < this.hourMax) {
            return this.minutesAvailable = this.minutes.map(m => true);
        }
        if (this.hour < this.hourMin || this.hour > this.hourMax) {
            return this.minutesAvailable = this.minutes.map(m => false);
        }
        const minMinute = this.hour === this.hourMin ? this.minuteMin : 0;
        const maxMinute = this.hour === this.hourMax ? this.minuteMax : 59;
        this.minutesAvailable = this.minutes.map(m => +m >= minMinute && +m <= maxMinute)
    }

    private setMode(mode) {
        this.mode = mode;
        this.hours = this.hoursModes[mode];
    }
    private applyDegrees() {
        this.minuteDegrees = 6 * this.minute;
        this.hourDegrees = 30 * (this.hour % 12) + this.minuteDegrees / 12;
    }
    private updateValue(hour, minute) {
        // Set the clock hours and minutes as integers
        if (hour < this.hourMin) {
            this.hour = this.hourMin;
            this.minute = this.minuteMin;
        } else if (hour > this.hourMax) {
            this.hour = this.hourMax;
            this.minute = this.minuteMax;
        } else {
            this.hour = hour;
            this.minute = minute;
            if (hour === this.hourMin) { this.minute = Math.max(this.minuteMin, this.minute); }
            if (hour === this.hourMax) { this.minute = Math.min(this.minuteMax, this.minute); }
        }
        // Set the right mode
        if (this.hour >= 12 && this.mode !== 'PM') {
            this.setMode('PM');
        } else if (this.hour < 12 && this.mode !== 'AM') {
            this.setMode('AM');
        }
        const paddedHour = pad(this.hour, 2);
        const paddedMinute = pad(this.minute, 2);
        // Set the clock indexes to highlight the numbers
        this.hourIndex = this.hours.indexOf(paddedHour);
        this.minuteIndex = this.minutes.indexOf(paddedMinute);
        this.model = `${paddedHour}:${paddedMinute}`;
        this.modelChange.emit(this.model);

        this.applyDegrees();
    }
    private updateValueFromIndex() {
        const { hour, minute } = this.getHourMinuteFromIndex();
        this.updateValue(hour, minute);
    }
    private updateValueFromModel() {
        const { hour, minute } = this.getHourMinuteFromModel();
        this.updateValue(hour, minute);
    }
    private getHourMinuteFromIndex() {
        return { hour: +this.hours[this.hourIndex], minute: +this.minutes[this.minuteIndex] };
    }
    private getHourMinuteFromModel() {
        const timeSplitted = (this.model || '00:00').split(':');
        return { hour: +timeSplitted[0], minute: +timeSplitted[1] };
    }
}
