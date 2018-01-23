import { UnicornComponentsModule } from './../../../unicorn.module';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = { imports: [UnicornComponentsModule.forRoot()] };
const items = `
    <uni-menu-item label="Create" icon="add"></uni-menu-item>
    <uni-menu-item label="Complete" icon="check"></uni-menu-item>
    <uni-menu-item label="Delete" icon="close"></uni-menu-item>
`;
const data = [
    { name: 'Alvaro Yuste', city: 'San Vicent', progress: 75, alerts: 3 },
    { name: 'Elad Rodriguez', city: 'San Juan', progress: 25, alerts: 8 },
    { name: 'Albert Pastor', city: 'Alicante', progress: 50, alerts: 1 }
]
storiesOf('Datagrid', module)
    .add('Basic', () => ({
        moduleMetadata, template: `
            <uni-datagrid [data]="data" [sortable]="false">
                <uni-datagrid-column field="name" title="Full name"></uni-datagrid-column>
                <uni-datagrid-column field="city" title="Location"></uni-datagrid-column>
                <uni-datagrid-column field="progress" title="Progress"></uni-datagrid-column>
                <uni-datagrid-column field="alerts" title="Alerts"></uni-datagrid-column>
            </uni-datagrid>
        `, props: { data }
    }))
    ;
