import { UniOption } from './../../../models/option';
import { UniSelectComponent } from './../../forms/select/select.component';
import { UniAutofocusDirective } from './../../../directives/autofocus.directive';
import { UniSeparatorComponent } from './../../utils/separator/separator.component';
import { UniListItem } from './../../../models/list-item';
import { UniSpinnerComponent } from './../../utils/spinner/spinner.component';
import { UniFiltersComponent } from './filters.component';
import { UniIconComponent } from './../../utils/icon/icon.component';

import { storiesOf } from '@storybook/angular';
import { UniButtonComponent } from '../button/button.component';
import { UniInputComponent } from '../../forms/input/input.component';
import { UniChipComponent } from '../../utils/chip/chip.component';
import { HighlightPipe } from '../../../pipes/highlight.pipe';
import { UniCheckboxComponent } from '../../forms/checkbox/checkbox.component';
import { UniFiltersAdvancedComponent } from './filters-advanced/filters-advanced.component';
import { UniFiltersMainComponent } from './filters-main/filters-main.component';
import { UniClickOutsideDirective } from '../../../directives/clickoutside.directive';
import { FormatDatePipe } from '../../../pipes/format-date.pipe';
import { UniDatePickerComponent } from '../../forms/date-picker/date-picker.component';
import { UniCalendarComponent } from '../calendar/calendar.component';

const moduleMetadata = {
    declarations: [
        UniFiltersComponent,
        UniFiltersAdvancedComponent,
        UniFiltersMainComponent,
        UniIconComponent,
        UniButtonComponent,
        UniSpinnerComponent,
        UniInputComponent,
        UniChipComponent,
        UniAutofocusDirective,
        UniSelectComponent,
        UniSeparatorComponent,
        UniCheckboxComponent,
        UniClickOutsideDirective,
        UniDatePickerComponent,
        UniCalendarComponent,
        FormatDatePipe,
        HighlightPipe
    ]
};
const roleOptions: UniOption[] = [
    { label: 'Admin', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Viewer', value: 'viewer' }
];
const tagsOptions: UniOption[] = [
    { label: 'Tag 1', value: 'tag1' },
    { label: 'Tag 2', value: 'tag2' },
    { label: 'Tag 3', value: 'tag3' }
];

storiesOf('Filters', module)
    .add('Basic', () => ({
        moduleMetadata, template: `
            <uni-filters [clearable]="false">
                <uni-input name="search" label="Search"></uni-input>
                <uni-select name="role" label="Role" [options]="roleOptions"></uni-select>
            </uni-filters>
        `, props: { roleOptions }
    }))
    .add('Clearable', () => ({
        moduleMetadata, template: `
            <uni-filters>
                <uni-input name="search" label="Search"></uni-input>
                <uni-select name="role" label="Role" [options]="roleOptions"></uni-select>
            </uni-filters>
        `, props: { roleOptions }
    }))
    .add('Initial filter', () => ({
        moduleMetadata, template: `
            <uni-filters [filter]="{ role: 'viewer' }">
                <uni-input name="search" label="Search"></uni-input>
                <uni-select name="role" label="Role" [options]="roleOptions"></uni-select>
            </uni-filters>
        `, props: { roleOptions }
    }))
    .add('Default filter', () => ({
        moduleMetadata, template: `
            <uni-filters [defaultFilter]="{ role: 'viewer' }">
                <uni-input name="search" label="Search"></uni-input>
                <uni-select name="role" label="Role" [options]="roleOptions"></uni-select>
            </uni-filters>
        `, props: { roleOptions }
    }))
    .add('Default input value', () => ({
        moduleMetadata, template: `
            <uni-filters>
                <uni-input name="search" label="Search"></uni-input>
                <uni-select name="role" label="Role" value="viewer" [options]="roleOptions"></uni-select>
            </uni-filters>
        `, props: { roleOptions }
    }))
    .add('Apply button', () => ({
        moduleMetadata, template: `
            <uni-filters buttonColor="success" buttonLabel="Search" buttonIcon="search">
                <uni-input name="search" label="Search"></uni-input>
                <uni-select name="role" label="Role" [options]="roleOptions"></uni-select>
            </uni-filters>
        `, props: { roleOptions }
    }))
    .add('Tracking filter', () => ({
        moduleMetadata, template: `
            <uni-filters (filterChange)="value = $event">
                <uni-input name="search" label="Search"></uni-input>
                <uni-select name="role" label="Role" [options]="roleOptions"></uni-select>
            </uni-filters>
            <p *ngIf="value"> The filter applied is {{value | json}}</p>
        `, props: { roleOptions }
    }))
    .add('Filter on blur', () => ({
        moduleMetadata, template: `
            <uni-filters (filterChange)="value = $event" autoFilter="onBlur">
                <uni-input name="search" label="Search"></uni-input>
                <uni-select name="role" label="Role" [options]="roleOptions"></uni-select>
            </uni-filters>
            <p *ngIf="value"> The filter applied is {{value | json}}</p>
        `, props: { roleOptions }
    }))
    .add('Filter on change', () => ({
        moduleMetadata, template: `
            <uni-filters (filterChange)="value = $event" autoFilter="onChange">
                <uni-input name="search" label="Search"></uni-input>
                <uni-select name="role" label="Role" [options]="roleOptions"></uni-select>
            </uni-filters>
            <p *ngIf="value"> The filter applied is {{value | json}}</p>
        `, props: { roleOptions }
    }))
    .add('Persistency', () => ({
        moduleMetadata, template: `
            <uni-filters persistent="myUniqueKey" autoFilter="onChange">
                <uni-input name="search" label="Search"></uni-input>
                <uni-select name="role" label="Role" [options]="roleOptions"></uni-select>
            </uni-filters>
        `, props: { roleOptions }
    }))
    .add('Advanced filters', () => ({
        moduleMetadata, template: `
            <uni-filters>
                <uni-filters-main>
                    <uni-input name="search" label="Search"></uni-input>
                    <uni-select name="role" label="Role" [options]="roleOptions"></uni-select>
                </uni-filters-main>
                <uni-filters-advanced>
                    <uni-date-picker name="created_after"></uni-date-picker>
                    <uni-select name="tags" placeholder="Select tags..."
                        [options]="tagsOptions"
                        [chips]="true"
                        [multiple]="true"
                    ></uni-select>
                    <uni-checkbox name="archived" label="Show archived"></uni-checkbox>
                </uni-filters-advanced>
            </uni-filters>
        `, props: { roleOptions, tagsOptions }
    }))
    ;

