import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'nts-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss'],
})
export class NtsCalendarComponent implements OnChanges {
    @Input() ntsModel;
    @Output() ntsModelChange = new EventEmitter();

    @Input() maxDate;
    @Input() minDate;
    

    selected: moment.Moment;
    month: moment.Moment = null;
    weeks = [];
    dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    constructor() { }

    ngOnChanges() {
        if (this.ntsModel) {
            this.selected = this.normalizeDate(moment(this.ntsModel));
            this.month = this.selected.clone();
        } else {
            this.selected = null;
            this.month = moment();
        }
        this.buildMonth(this.beginOfMonth(this.month));
    };

    select(day) {
        if(this.maxDate && day.date.isAfter(this.maxDate) || this.minDate && day.date.isBefore(this.minDate)){ return; }
        
        this.selected = day.date;
        let newDate = this.selected.format('YYYY-MM-DD');
        this.ntsModelChange.emit(newDate);
    };

    next() {
        let next = this.beginOfNextMonth(this.month);
        this.month.add(1, 'months');
        this.buildMonth(next);
    };
    previous() {
        let previous = this.beginOfPreviousMonth(this.month);
        this.month.subtract(1, 'months');
        this.buildMonth(previous);
    };

    private normalizeDate(date: moment.Moment) {
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

    buildMonth(start) {
        this.weeks = [];
        let done = false, date = start.clone(), monthIndex = date.month(), count = 0;
        while (!done) {
            this.weeks.push({ days: this.buildWeek(date.clone()) });
            date.add(1, 'w');
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    buildWeek(date) {
        let days = [];
        for (let i = 0; i < 7; i++) {
            days.push({
                name: date.format('dd').substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === this.month.month(),
                isToday: date.isSame(new Date(), 'day'),
                date: date
            });
            date = date.clone();
            date.add(1, 'd');
        }
        return days;
    }

    // https://www.codementor.io/angularjs/tutorial/angularjs-calendar-directives-less-cess-moment-font-awesome
}
