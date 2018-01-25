import { UniIconComponent } from './../icon/icon.component';
import { UniChipComponent } from './chip.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniChipComponent,
        UniIconComponent
    ]
};

storiesOf('Chip', module)
    .add('Basic', () => ({
        moduleMetadata,
        component: UniChipComponent,
        props: { label: 'label 1' }
    }))
    .add('Closable', () => ({
        moduleMetadata,
        component: UniChipComponent,
        props: { label: 'label 1', removable: true }
    }))
    .add('Track close', () => ({
        moduleMetadata, template: `
            <uni-chip *ngIf="!closed" label="label 1" [removable]="true" (remove)="closed = true"></uni-chip>
            <p *ngIf="closed">The tag was closed</p>
        `
    }))
    .add('Colors', () => ({
        moduleMetadata, template: `
            <uni-chip label="label 1"></uni-chip>
            <uni-chip label="label 2" color="primary"></uni-chip>
            <uni-chip label="label 3" color="success"></uni-chip>
            <uni-chip label="label 4" color="warning"></uni-chip>
            <uni-chip label="label 5" color="error"></uni-chip>
        `
    }));
