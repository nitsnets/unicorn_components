import { UniPaginatorComponent } from './paginator.component';
import { UniIconComponent } from './../../utils/icon/icon.component';

import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniPaginatorComponent,
        UniIconComponent
    ]
};
storiesOf('Paginator', module)
    .add('Basic', () => ({
        moduleMetadata, component: UniPaginatorComponent, props: {
            totalElements: 134,
            pageSize: 10
        }
    }))
    .add('Initial page', () => ({
        moduleMetadata, component: UniPaginatorComponent, props: {
            totalElements: 134,
            pageSize: 10,
            selected: 4,
        }
    }))
    .add('Track selected', () => ({
        moduleMetadata, component: UniPaginatorComponent, template: `
            <uni-paginator [totalElements]="134" [pageSize]="10" (selectedChange)="value = $event"></uni-paginator>
            <p *ngIf="value">The value is {{value}}</p>
        `
    }))

