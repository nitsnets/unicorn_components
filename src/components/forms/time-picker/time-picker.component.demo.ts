import { UniRowComponent } from './../../containers/row/row.component';
import { UniChipComponent } from './../../utils/chip/chip.component';
import { UniIconComponent } from './../../utils/icon/icon.component';
import { UniButtonComponent } from './../../ui/button/button.component';
import { UniClockComponent } from './../../ui/clock/clock.component';
import { UniTimePickerComponent } from './../time-picker/time-picker.component';
import { UniDatePickerComponent } from './../date-picker/date-picker.component';
import { UniInputComponent } from '../input/input.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { UniClickOutsideDirective } from '../../../directives/clickoutside.directive';
import { FormatDatePipe } from '../../../pipes/format-date.pipe';
import * as moment from 'moment';

import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniTimePickerComponent,
        UniClockComponent,
        UniInputComponent,
        UniIconComponent,
        UniChipComponent,
        UniClickOutsideDirective,
        UniButtonComponent,
        UniSpinnerComponent,
    ]
};
const label = 'Slide me!'

storiesOf('Date and time/Time picker', module)
    .add('Basic', () => ({ moduleMetadata, component: UniTimePickerComponent }))
    .add('Label', () => ({
        moduleMetadata, component: UniTimePickerComponent, props: {
            label: 'Time label'
        }
    }))
    .add('Inline', () => ({
        moduleMetadata, component: UniTimePickerComponent, props: {
            floating: false
        }
    }))
    .add('Min and max', () => ({
        moduleMetadata, component: UniTimePickerComponent, props: {
            min: moment().subtract(30, 'm').format('hh:mm'),
            max: moment().add(30, 'm').format('hh:mm'),
        }
    }))
    .add('Track value', () => ({
        moduleMetadata, template: `
            <uni-time-picker [(model)]="value"></uni-time-picker>
            <p *ngIf="value">The value is {{value}}</p>
        `
    }))

