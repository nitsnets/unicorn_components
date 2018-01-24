import { UniRowComponent } from './../../containers/row/row.component';
import { UniChipComponent } from './../../utils/chip/chip.component';
import { UniIconComponent } from './../../utils/icon/icon.component';
import { UniButtonComponent } from './../../ui/button/button.component';
import { UniClockComponent } from './../../ui/clock/clock.component';
import { UniTimePickerComponent } from './../time-picker/time-picker.component';
import { UniDatePickerComponent } from './../date-picker/date-picker.component';
import { UniCalendarComponent } from '../../ui/calendar/calendar.component';
import { UniInputComponent } from '../input/input.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { UniClickOutsideDirective } from '../../../directives/clickoutside.directive';
import { FormatDatePipe } from '../../../pipes/format-date.pipe';
import * as moment from 'moment';

import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniDatePickerComponent,
        UniCalendarComponent,
        UniInputComponent,
        UniIconComponent,
        UniChipComponent,
        UniClickOutsideDirective,
        UniButtonComponent,
        UniSpinnerComponent,
        FormatDatePipe
    ]
};

storiesOf('Date and time/Date picker', module)
    .add('Basic', () => ({ moduleMetadata, component: UniDatePickerComponent }))
    .add('Label', () => ({
        moduleMetadata, component: UniDatePickerComponent, props: {
            label: 'Date label'
        }
    }))
    .add('Inline', () => ({
        moduleMetadata, component: UniDatePickerComponent, props: {
            floating: false
        }
    }))
    .add('Min and max', () => ({
        moduleMetadata, component: UniDatePickerComponent, props: {
            min: moment().subtract(3, 'd').format('YYYY-MM-DD'),
            max: moment().add(3, 'd').format('YYYY-MM-DD'),
        }
    }))
    .add('Track value', () => ({
        moduleMetadata, component: UniDatePickerComponent, template: `
            <uni-date-picker [(model)]="value"></uni-date-picker>
            <p *ngIf="value">The value is {{value | formatDate : 'DD/MM/YYYY'}}</p>
        `
    }))

