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
storiesOf('Datagrid/Custom columns', module)
    .add('Nested fields', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user.name" title="Full name"></uni-datagrid-column>
            <uni-datagrid-column field="city" title="Location"></uni-datagrid-column>
            <uni-datagrid-column field="alerts" title="Alerts"></uni-datagrid-column>
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Labels', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user.name" title="Full name"></uni-datagrid-column>
            <uni-datagrid-column field="city" title="Location"></uni-datagrid-column>
            <uni-datagrid-column field="alerts" title="Alerts" [showLabels]="true"></uni-datagrid-column>
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Highlight cells', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user.name" title="Full name"></uni-datagrid-column>
            <uni-datagrid-column field="city" title="Location"></uni-datagrid-column>
            <uni-datagrid-column field="alerts" title="Alerts" [highlightCell]="true"></uni-datagrid-column>
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Sortable', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user.name" title="Full name"></uni-datagrid-column>
            <uni-datagrid-column field="city" title="Location" [sortable]="false"></uni-datagrid-column>
            <uni-datagrid-column field="alerts" title="Alerts"></uni-datagrid-column>
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Initial sort', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user.name" title="Full name"></uni-datagrid-column>
            <uni-datagrid-column field="city" title="Location"></uni-datagrid-column>
            <uni-datagrid-column field="alerts" title="Alerts" sort="desc"></uni-datagrid-column>
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Text formats', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user.name" title="Full name" format="h3"></uni-datagrid-column>
            <uni-datagrid-column field="city" title="Location" format="strong"></uni-datagrid-column>
            <uni-datagrid-column field="created_at" title="Created at" format="date"></uni-datagrid-column>
            <uni-datagrid-column field="progress" title="Progress" format="percentage"></uni-datagrid-column>
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Multimedia formats', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user" format="face" [sortable]="false"></uni-datagrid-column>
            <uni-datagrid-column field="user.name" title="Full name" format="h3"></uni-datagrid-column>
            <uni-datagrid-column field="description" title="Description" format="html"></uni-datagrid-column>
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Width', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user" format="face" [sortable]="false" width="60px"></uni-datagrid-column>
            <uni-datagrid-column field="user.name" title="Full name" format="h3" width="2"></uni-datagrid-column>
            <uni-datagrid-column field="description" title="Description" format="html"></uni-datagrid-column>
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Rich formats', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user" format="face" [sortable]="false" width="60px"></uni-datagrid-column>
            <uni-datagrid-column field="user.name" title="Full name" format="h3"></uni-datagrid-column>
            <uni-datagrid-column field="city" title="City"></uni-datagrid-column>
            <uni-datagrid-column field="progress" title="Progress"
                format="progress"
                [formatOptions]="{color: 'primary', total: 1}"
            ></uni-datagrid-column>
            <uni-datagrid-column field="alerts" title="Alerts"
                format="badge"
                [formatOptions]="{color: 'error'}"
            ></uni-datagrid-column>
        </uni-datagrid>
    `, props: { data }
    }))
    .add('Custom cell', () => ({
        moduleMetadata, template: `
        <uni-datagrid [data]="data">
            <uni-datagrid-column field="user" format="face" [sortable]="false" width="60px"></uni-datagrid-column>
            <uni-datagrid-column field="user.name" title="Full name" format="h3"></uni-datagrid-column>
            <uni-datagrid-column field="created_at" title="Born" width="2">
                <ng-template cellVariables let-row>
                    Was born at
                    <strong>{{row.city}}</strong> on <strong>{{row.created_at | format: 'date'}}</strong>.
                </ng-template>
            </uni-datagrid-column>
            <uni-datagrid-column field="progress" title="Progress"
                format="progress"
                [formatOptions]="{color: 'primary', total: 1}"
            ></uni-datagrid-column>
            <uni-datagrid-column field="alerts" title="Alerts"
                format="badge"
                [formatOptions]="{color: 'error'}"
            ></uni-datagrid-column>
            <uni-datagrid-column width="50px" [sortable]="false">
                <ng-template cellVariables>
                    <uni-button-menu iconRight="more_vert">
                        <uni-menu-item icon="check" label="Complete"></uni-menu-item>
                        <uni-menu-item icon="add" label="Add task"></uni-menu-item>
                        <uni-menu-item icon="close" label="Clear"></uni-menu-item>
                    </uni-button-menu>
                </ng-template>
            </uni-datagrid-column>
        </uni-datagrid>
    `, props: { data }
    }))
    ;
