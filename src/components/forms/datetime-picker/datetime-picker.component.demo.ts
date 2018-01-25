import { UniChipComponent } from './../../utils/chip/chip.component';
import { UniIconComponent } from './../../utils/icon/icon.component';
import { UniButtonComponent } from './../../ui/button/button.component';
import { UniClockComponent } from './../../ui/clock/clock.component';
import { UniTimePickerComponent } from './../time-picker/time-picker.component';
import { UniDatePickerComponent } from './../date-picker/date-picker.component';
import { UniDatetimePickerComponent } from './datetime-picker.component';
import { UniCalendarComponent } from '../../ui/calendar/calendar.component';
import { UniInputComponent } from '../input/input.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { UniClickOutsideDirective } from '../../../directives/clickoutside.directive';
import * as moment from 'moment';

import { storiesOf } from '@storybook/angular';
import { FormatDatePipe } from '../../../pipes/format-date.pipe';

const moduleMetadata = {
    declarations: [
        UniDatetimePickerComponent,
        UniDatePickerComponent,
        UniTimePickerComponent,
        UniCalendarComponent,
        UniClockComponent,
        UniInputComponent,
        UniButtonComponent,
        UniSpinnerComponent,
        UniIconComponent,
        UniChipComponent,
        UniClickOutsideDirective,
        FormatDatePipe
    ]
};
const label = 'Slide me!'

storiesOf('Date and time/Date-time picker', module)
    .add('Basic', () => ({ moduleMetadata, component: UniDatetimePickerComponent }))
    .add('Labels', () => ({
        moduleMetadata, component: UniDatetimePickerComponent, props: {
            timeLabel: 'Time label',
            dateLabel: 'Date label'
        }
    }))
    .add('Inline', () => ({
        moduleMetadata, component: UniDatetimePickerComponent, props: {
            floating: false,
        }
    }))
    .add('Date limits', () => ({
        moduleMetadata, component: UniDatetimePickerComponent, props: {
            minDate: moment().subtract(3, 'd').format('YYYY-MM-DD'),
            maxDate: moment().add(3, 'd').format('YYYY-MM-DD'),
        }
    }))
    .add('Time limits', () => ({
        moduleMetadata, component: UniDatetimePickerComponent, props: {
            minTime: moment().subtract(30, 'm').format('hh:mm'),
            maxTime: moment().add(30, 'm').format('hh:mm'),
        }
    }))
    .add('Track value', () => ({
        moduleMetadata, component: UniDatePickerComponent, template: `
            <uni-datetime-picker [(model)]="value"></uni-datetime-picker>
            <p *ngIf="value">The date is {{value.date | formatDate : 'DD/MM/YYYY'}}</p>
            <p *ngIf="value">The time is {{value.time}}</p>
        `
    }))

