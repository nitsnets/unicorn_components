import { UniProgressComponent } from './progress.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [UniProgressComponent]
};

storiesOf('Progress', module)
    .add('Basic', () => ({
        moduleMetadata,
        component: UniProgressComponent,
        props: {
            value: 50
        }
    }))
    .add('Show count', () => ({
        moduleMetadata,
        component: UniProgressComponent,
        props: {
            value: 50,
            showCount: true
        }
    }))
    .add('Show percentage', () => ({
        moduleMetadata,
        component: UniProgressComponent,
        props: {
            value: 50,
            showPercentage: true
        }
    }))
    .add('Custom total', () => ({
        moduleMetadata,
        component: UniProgressComponent,
        props: {
            total: 10,
            value: 5,
            showCount: true
        }
    }))
    .add('Colors', () => ({
        moduleMetadata, template: `
            <uni-progress [showPercentage]="true" value="10"></uni-progress>
            <uni-progress [showPercentage]="true" value="30" color="primary"></uni-progress>
            <uni-progress [showPercentage]="true" value="50" color="success"></uni-progress>
            <uni-progress [showPercentage]="true" value="70" color="warning"></uni-progress>
            <uni-progress [showPercentage]="true" value="90" color="error"></uni-progress>
        `
    }))
