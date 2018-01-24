import { FormatDatePipe } from './../../../pipes/format-date.pipe';
import { UniIconComponent } from './../../utils/icon/icon.component';
import { UniClockComponent } from './clock.component';
import { UniButtonComponent } from '../button/button.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';

import { storiesOf } from '@storybook/angular';
import * as moment from 'moment';

const moduleMetadata = {
    declarations: [
        UniClockComponent
    ]
};
storiesOf('Date and time/Clock', module)
    .add('Basic', () => ({ moduleMetadata, component: UniClockComponent }))
    .add('Min and max', () => ({
        moduleMetadata, component: UniClockComponent, props: {
            min: moment().subtract(30, 'm').format('hh:mm'),
            max: moment().add(30, 'm').format('hh:mm'),
        }
    }))
    .add('Track value', () => ({
        moduleMetadata, component: UniClockComponent, template: `
            <uni-clock [(model)]="value"></uni-clock>
            <p *ngIf="value">The value is {{value}}</p>
        `
    }))

