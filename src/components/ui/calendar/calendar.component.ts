import * as moment from 'moment';

import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'uni-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss'],
})
export class UniCalendarComponent implements OnChanges {
    @Input() model;
    @Output() modelChange = new EventEmitter();

    @Input() maxDate;
    @Input() minDate;

    @Input() rangeFrom;
    @Input() rangeTo;

    selected: moment.Moment;
    month: moment.Moment = null;
    weeks = [];
    dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    constructor() { }

    ngOnChanges(changes) {
        if (this.model) {
            this.selected = this.normalizeDate(moment(this.model, 'YYYY-MM-DD'));
            this.month = this.selected.clone();
        } else {
            this.selected = null;
            this.month = moment();
        }
        if (changes.rangeFrom && this.rangeFrom) { this.rangeFrom = moment(this.rangeFrom, 'YYYY-MM-DD'); }
        if (changes.rangeTo && this.rangeTo) { this.rangeTo = moment(this.rangeTo, 'YYYY-MM-DD'); }

        this.buildMonth(this.beginOfMonth(this.month));
    };

    select(day) {
        if (
            this.maxDate
            && day.date.isAfter(this.maxDate)
            || this.minDate && day.date.isBefore(this.minDate)
        ) { return; }

        this.selected = day.date;
        const newDate = this.selected.format('YYYY-MM-DD');
        this.modelChange.emit(newDate);
    };

    next() {
        const next = this.beginOfNextMonth(this.month);
        this.month.add(1, 'months');
        this.buildMonth(next);
    };
    previous() {
        const previous = this.beginOfPreviousMonth(this.month);
        this.month.subtract(1, 'months');
        this.buildMonth(previous);
    };
    isRangeFromActive() { return this.rangeFrom && this.selected && !this.rangeFrom.isSame(this.selected); }
    isRangeToActive() { return this.rangeTo && this.selected && !this.rangeTo.isSame(this.selected); }

    private normalizeDate(date: moment.Moment): moment.Moment {
        return date.hour(0).minute(0).second(0).millisecond(0);
    }
    private beginOfMonth(date: moment.Moment): moment.Moment {
        return this.normalizeDate(date.clone().startOf('month').isoWeekday(1));
    }
    private beginOfPreviousMonth(date: moment.Moment): moment.Moment {
        return this.beginOfMonth(date.clone().subtract(1, 'months'));
    }
    private beginOfNextMonth(date: moment.Moment): moment.Moment {
        return this.beginOfMonth(date.clone().add(1, 'months'));
    }

    private buildMonth(start: moment.Moment) {
        this.weeks = [];
        const date = start.clone();
        let done = false, monthIndex = date.month(), count = 0;
        while (!done) {
            this.weeks.push({ days: this.buildWeek(date.clone()) });
            date.add(1, 'w');
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    private buildWeek(date: moment.Moment): Array<any> {
        const days = [];
        for (let i = 0; i < 7; i++) {
            days.push({
                name: date.format('dd').substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === this.month.month(),
                isToday: date.isSame(new Date(), 'day'),
                isRangeFrom: this.rangeFrom ? date.isSame(this.rangeFrom, 'day') : false,
                isRangeMiddle: this.rangeTo ? date.isBetween(this.selected, this.rangeTo, 'day') :
                    this.rangeFrom ? date.isBetween(this.rangeFrom, this.selected, 'day') : false,
                isRangeTo: this.rangeTo ? date.isSame(this.rangeTo, 'day') : false,
                isUnavailable:
                (this.maxDate && date.isAfter(this.maxDate)) ||
                (this.minDate && date.isBefore(this.minDate)),
                date: date
            });
            date = date.clone();
            date.add(1, 'd');
        }
        return days;
    }

    // https://www.codementor.io/angularjs/tutorial/angularjs-calendar-directives-less-cess-moment-font-awesome
}
