import { UniRowComponent } from './../../containers/row/row.component';
import { UniChipComponent } from './../../utils/chip/chip.component';
import { UniIconComponent } from './../../utils/icon/icon.component';
import { UniButtonComponent } from './../../ui/button/button.component';
import { UniClockComponent } from './../../ui/clock/clock.component';
import { UniTimePickerComponent } from './../time-picker/time-picker.component';
import { UniDatePickerComponent } from './../date-picker/date-picker.component';
import { UniDaterangePickerComponent } from './daterange-picker.component';
import { UniCalendarComponent } from '../../ui/calendar/calendar.component';
import { UniInputComponent } from '../input/input.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { UniClickOutsideDirective } from '../../../directives/clickoutside.directive';
import { FormatDatePipe } from '../../../pipes/format-date.pipe';
import * as moment from 'moment';

import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniDaterangePickerComponent,
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
        UniRowComponent,
        FormatDatePipe
    ]
};
const label = 'Slide me!'

storiesOf('Date and time/Date-range picker', module)
    .add('Basic', () => ({ moduleMetadata, component: UniDaterangePickerComponent }))
    .add('Custom labels', () => ({
        moduleMetadata, component: UniDaterangePickerComponent, props: {
            fromLabel: 'From label',
            toLabel: 'To label'
        }
    }))
    .add('Combo', () => ({
        moduleMetadata, component: UniDaterangePickerComponent, props: {
            combo: true,
        }
    }))
    .add('Combo placeholder', () => ({
        moduleMetadata, component: UniDaterangePickerComponent, props: {
            combo: true,
            comboLabel: 'Combo label',
        }
    }))
    .add('Arrows', () => ({
        moduleMetadata, component: UniDaterangePickerComponent, props: {
            combo: true,
            showArrows: true,
        }
    }))
    .add('Min and max', () => ({
        moduleMetadata, component: UniDaterangePickerComponent, props: {
            min: moment().subtract(3, 'd').format('YYYY-MM-DD'),
            max: moment().add(3, 'd').format('YYYY-MM-DD'),
        }
    }))
    .add('Track value', () => ({
        moduleMetadata, component: UniDatePickerComponent, template: `
            <uni-daterange-picker [(model)]="value"></uni-daterange-picker>
            <p *ngIf="value">
                The date goes
                from {{value.from | formatDate : 'DD/MM/YYYY'}}
                to {{value.to | formatDate : 'DD/MM/YYYY'}}
            </p>
        `
    }))

