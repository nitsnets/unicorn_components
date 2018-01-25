import { UniSpinnerComponent } from './spinner.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [UniSpinnerComponent]
};

storiesOf('Spinner', module)
    .add('Basic', () => ({
        moduleMetadata,
        component: UniSpinnerComponent,
    }))
    .add('Small', () => ({
        moduleMetadata,
        component: UniSpinnerComponent,
        props: {
            size: 'small'
        }
    }))
    .add('Big', () => ({
        moduleMetadata,
        component: UniSpinnerComponent,
        props: {
            size: 'big'
        }
    }))
    .add('Colors', () => ({
        moduleMetadata, template: `
            <uni-spinner></uni-spinner>
            <uni-spinner color="primary"></uni-spinner>
            <uni-spinner color="error"></uni-spinner>
        `
    }))
    .add('Dots', () => ({
        moduleMetadata,
        component: UniSpinnerComponent,
        props: {
            type: 'dots'
        }
    }))
    .add('Small dots', () => ({
        moduleMetadata,
        component: UniSpinnerComponent,
        props: {
            size: 'small',
            type: 'dots'
        }
    }))
    .add('Big dots', () => ({
        moduleMetadata,
        component: UniSpinnerComponent,
        props: {
            size: 'big',
            type: 'dots'
        }
    }))
    .add('Color dots', () => ({
        moduleMetadata, template: `
            <uni-spinner type="dots"></uni-spinner>
            <uni-spinner type="dots" color="primary"></uni-spinner>
            <uni-spinner type="dots" color="error"></uni-spinner>
        `
    }))
