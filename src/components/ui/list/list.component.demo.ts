import { UniAutofocusDirective } from './../../../directives/autofocus.directive';
import { UniSeparatorComponent } from './../../utils/separator/separator.component';
import { UniListItem } from './../../../models/list-item';
import { UniSpinnerComponent } from './../../utils/spinner/spinner.component';
import { UniListComponent } from './list.component';
import { UniIconComponent } from './../../utils/icon/icon.component';

import { storiesOf } from '@storybook/angular';
import { UniButtonComponent } from '../button/button.component';
import { UniInputComponent } from '../../forms/input/input.component';
import { UniChipComponent } from '../../utils/chip/chip.component';

const moduleMetadata = {
    declarations: [
        UniListComponent,
        UniIconComponent,
        UniButtonComponent,
        UniSpinnerComponent,
        UniInputComponent,
        UniChipComponent,
        UniSeparatorComponent,
        UniAutofocusDirective
    ]
};
const data: UniListItem[] = [
    { label: 'Item 1', icon: 'check', value: 1 },
    { label: 'Item 2', icon: 'add', value: 2 },
    { label: 'Item 3', icon: 'close', value: 3 }
]

storiesOf('List', module)
    .add('Basic', () => ({
        moduleMetadata, component: UniListComponent,
        props: {
            data,
            showIcons: false
        }
    }))
    .add('Icons', () => ({
        moduleMetadata, component: UniListComponent,
        props: {
            data
        }
    }))
    .add('Separator', () => ({
        moduleMetadata, component: UniListComponent,
        props: {
            data: [
                data[0],
                { name: '----' },
                data[1],
                data[2]
            ]
        }
    }))
    .add('Selectable', () => ({
        moduleMetadata, component: UniListComponent,
        props: {
            data,
            selectable: true
        }
    }))
    .add('Track selected', () => ({
        moduleMetadata, component: UniListComponent, template: `
            <uni-list [data]="data" [selectable]="true" (itemSelectedChange)="value = $event"></uni-list>
            <p *ngIf="value">The items selected is {{value | json}}</p>
        `, props: { data }
    }))
    .add('Editable', () => ({
        moduleMetadata, component: UniListComponent,
        props: {
            data,
            editable: true
        }
    }))

