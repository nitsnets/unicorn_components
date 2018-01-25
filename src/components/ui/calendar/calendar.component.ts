import * as moment from 'moment';

import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, OnInit } from '@angular/core';

@Component({
    selector: 'uni-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss'],
})
export class UniCalendarComponent implements OnChanges, OnInit {

    @HostBinding('class.uni-calendar') componentClass = true;

    @HostBinding('class.uni-calendar--bordered')
    @Input() bordered = false;

    private _model;
    @Input() set model(value: string) {
        if (value) {
            this._model = value;
            this.selected = this.normalizeDate(moment(value, 'YYYY-MM-DD'));
            this.month = this.selected.clone();
        } else {
            this.selected = null;
            this.month = moment();
        }
    }
    get model() { return this._model }

    @Output() modelChange = new EventEmitter();

    @Input() max;
    @Input() min;

    @Input() rangeFrom;
    @Input() rangeTo;

    selected: moment.Moment = null;
    month: moment.Moment = moment();
    weeks = [];
    dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    constructor() { }

    ngOnChanges(changes) {
        if (changes.rangeFrom && this.rangeFrom) {
            this.rangeFrom = moment(this.rangeFrom, 'YYYY-MM-DD');
        }
        if (changes.rangeTo && this.rangeTo) {
            this.rangeTo = moment(this.rangeTo, 'YYYY-MM-DD');
        }
        this.renderCalendar();
    };
    ngOnInit() {
        this.renderCalendar();
    }

    select(day) {
        if (!day) { return; }

        if (this.max && day.isAfter(this.max)) { day = moment(this.max) }
        if (this.min && day.isBefore(this.min)) { day = moment(this.min) }

        this.selected = day;
        this.modelChange.emit(day.format('YYYY-MM-DD'));
        this.renderCalendar();
    };

    next() {
        const next = this.beginOfNextMonth(this.month);
        this.month.add(1, 'months');
        this.renderMonth(next);
    };
    previous() {
        const previous = this.beginOfPreviousMonth(this.month);
        this.month.subtract(1, 'months');
        this.renderMonth(previous);
    };
    isRangeFromActive() { return this.rangeFrom && this.selected && !this.rangeFrom.isSame(this.selected); }
    isRangeToActive() { return this.rangeTo && this.selected && !this.rangeTo.isSame(this.selected); }
    renderCalendar() {
        this.renderMonth(this.beginOfMonth(this.month));
    }
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
    private renderMonth(start: moment.Moment) {
        this.weeks = [];
        const date = start.clone();
        let done = false, monthIndex = date.month(), count = 0;
        while (!done) {
            this.weeks.push({ days: this.renderWeek(date.clone()) });
            date.add(1, 'w');
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    private renderWeek(date: moment.Moment): Array<any> {
        const days = [];
        for (let i = 0; i < 7; i++) {
            days.push({
                name: date ? date.format('dd').substring(0, 1) : '-',
                number: date.date(),
                isCurrentMonth: date.month() === this.month.month(),
                isToday: date.isSame(new Date(), 'day'),
                isRangeFrom: this.rangeFrom ? date.isSame(this.rangeFrom, 'day') : false,
                isRangeMiddle: this.rangeTo ? date.isBetween(this.selected, this.rangeTo, 'day') :
                    this.rangeFrom ? date.isBetween(this.rangeFrom, this.selected, 'day') : false,
                isRangeTo: this.rangeTo ? date.isSame(this.rangeTo, 'day') : false,
                isUnavailable:
                    (this.max && date.isAfter(this.max)) ||
                    (this.min && date.isBefore(this.min)),
                date: date
            });
            date = date.clone();
            date.add(1, 'd');
        }
        return days;
    }

    // https://www.codementor.io/angularjs/tutorial/angularjs-calendar-directives-less-cess-moment-font-awesome
}
