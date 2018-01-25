import { FormatDatePipe } from './../../../pipes/format-date.pipe';
import { UniIconComponent } from './../../utils/icon/icon.component';
import { UniCalendarComponent } from './calendar.component';
import { UniButtonComponent } from '../button/button.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';

import { storiesOf } from '@storybook/angular';
import * as moment from 'moment';

const moduleMetadata = {
    declarations: [
        UniCalendarComponent,
        UniButtonComponent,
        UniIconComponent,
        UniSpinnerComponent,
        FormatDatePipe
    ]
};
storiesOf('Date and time/Calendar', module)
    .add('Basic', () => ({ moduleMetadata, component: UniCalendarComponent }))
    .add('Border', () => ({
        moduleMetadata, component: UniCalendarComponent, props: {
            bordered: true
        }
    }))
    .add('Min and max', () => ({
        moduleMetadata, component: UniCalendarComponent, props: {
            min: moment().subtract(3, 'd').format('YYYY-MM-DD'),
            max: moment().add(3, 'd').format('YYYY-MM-DD'),
        }
    }))
    .add('Range from', () => ({
        moduleMetadata, component: UniCalendarComponent, props: {
            rangeFrom: moment().subtract(3, 'd').format('YYYY-MM-DD'),
        }
    }))
    .add('Range to', () => ({
        moduleMetadata, component: UniCalendarComponent, props: {
            rangeTo: moment().add(3, 'd').format('YYYY-MM-DD'),
        }
    }))
    .add('Track value', () => ({
        moduleMetadata, component: UniCalendarComponent, template: `
            <uni-calendar [(model)]="value"></uni-calendar>
            <p *ngIf="value">The value is {{value | formatDate : 'DD/MM/YYYY'}}</p>
        `
    }))

