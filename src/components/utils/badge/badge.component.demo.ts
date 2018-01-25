import { UniBadgeComponent } from './badge.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniBadgeComponent,
    ]
};

storiesOf('Badge', module)
    .add('Basic', () => ({
        moduleMetadata,
        component: UniBadgeComponent,
        props: { label: 1 }
    }))
    .add('Colors', () => ({
        moduleMetadata, template: `
            <uni-badge label="1"></uni-badge>
            <uni-badge label="1" color="primary"></uni-badge>
            <uni-badge label="1" color="success"></uni-badge>
            <uni-badge label="1" color="warning"></uni-badge>
            <uni-badge label="1" color="error"></uni-badge>
        `
    }));
