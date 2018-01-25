import { UnicornComponentsModule } from './../../../../unicorn.module';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = { imports: [UnicornComponentsModule.forRoot()] };

const data = [
    {
        id: 1,
        user: {
            image: '//avatars3.githubusercontent.com/u/2926495',
            name: 'Alvaro Yuste',
        },
        description: 'A <strong>strong</strong> word',
        city: 'Sant Vicent del Raspeig',
        created_at: '2017-12-17',
        progress: 0.7,
        alerts: 3
    },
    {
        id: 2,
        user: {
            image: '//avatars2.githubusercontent.com/u/5548329',
            name: 'Paco Segovia',
        },
        description: 'An <em>emphasised</em> word',
        city: 'Ibi',
        created_at: '2017-11-26',
        progress: 0.25,
        alerts: 8
    },
    {
        id: 3,
        user: {
            image: '//avatars0.githubusercontent.com/u/3008680',
            name: 'Berto Ordás',
        },
        description: 'A <mark>marked</mark> word.<br>And abroken line.',
        city: 'Oviedo',
        created_at: '2017-05-08',
        progress: 0.5,
        alerts: 1
    }
]
storiesOf('Datagrid/Custom rows', module)
    .add('Basic', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user.name" title="Full name"></uni-datagrid-column>
            <uni-datagrid-column field="city" title="Location"></uni-datagrid-column>
            <uni-datagrid-column field="alerts" title="Alerts"></uni-datagrid-column>

            <ng-template rowVariables let-row>
                <uni-face [user]="row.user"></uni-face>
                <h3>{{row.user.name}} lives in {{row.city}}</h3>
            </ng-template>
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Spacer', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user.name" title="Full name"></uni-datagrid-column>
            <uni-datagrid-column field="city" title="Location"></uni-datagrid-column>
            <uni-datagrid-column field="alerts" title="Alerts"></uni-datagrid-column>

            <ng-template rowVariables let-row>
                <uni-face [user]="row.user"></uni-face>
                <h3>{{row.user.name}} lives in {{row.city}}</h3>
                <uni-row-spacer></uni-row-spacer>
                <uni-badge [label]="row.alerts" color="error"></uni-badge>
            </ng-template>
        </uni-datagrid>
    `, props: { data }
    }))
    ;
