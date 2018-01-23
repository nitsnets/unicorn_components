import { UniCheckboxComponent } from './checkbox.component';
import { UniButtonComponent } from '../../ui/button/button.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniButtonToggleComponent } from '../button-toggle/button-toggle.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { storiesOf } from '@storybook/angular';
import { UniToggleComponent } from '../toggle/toggle.component';
import { UniButtonGroupComponent } from '../../ui/button-group/button-group.component';

const moduleMetadata = {
    declarations: [
        UniCheckboxComponent,
        UniButtonComponent,
        UniSpinnerComponent,
        UniToggleComponent,
        UniButtonToggleComponent,
        UniIconComponent,
        UniButtonGroupComponent
    ]
};
const label = 'Click here!'

storiesOf('Checkbox', module)
    .add('Basic', () => ({ moduleMetadata, component: UniCheckboxComponent }))
    .add('Label', () => ({
        moduleMetadata,
        component: UniCheckboxComponent,
        props: { label }
    }))
    .add('Indeterminate', () => ({
        moduleMetadata,
        component: UniCheckboxComponent,
        props: {
            partial: true,
            label
        }
    }))
    .add('Toggle', () => ({
        moduleMetadata,
        component: UniToggleComponent
    }))
    .add('Toggle colors', () => ({
        moduleMetadata,
        template: `
            <uni-toggle></uni-toggle>
            <uni-toggle color="primary"></uni-toggle>
            <uni-toggle color="success"></uni-toggle>
            <uni-toggle color="warning"></uni-toggle>
            <uni-toggle color="error"></uni-toggle>
    `}))
    .add('Toggle small', () => ({
        moduleMetadata,
        component: UniToggleComponent,
        props: {
            size: 'small'
        }
    }))
    .add('Toggle labeled', () => ({
        moduleMetadata,
        component: UniToggleComponent,
        props: {
            size: 'small',
            label
        }
    }))
    .add('Toggle squared', () => ({
        moduleMetadata,
        component: UniToggleComponent,
        props: {
            rounded: false
        }
    }))
    .add('Toggle squared and small', () => ({
        moduleMetadata,
        component: UniToggleComponent,
        props: {
            rounded: false,
            size: 'small'
        }
    }))
    .add('Toggle square and labeled', () => ({
        moduleMetadata,
        component: UniToggleComponent,
        props: {
            rounded: false,
            size: 'small',
            label
        }
    }))
    .add('Button toggle', () => ({
        moduleMetadata,
        template: `
            <uni-button-toggle [label]="label"></uni-button-toggle>
            <uni-button-toggle [label]="label" color="default"></uni-button-toggle>
            <uni-button-toggle [label]="label" color="primary"></uni-button-toggle>
            <uni-button-toggle [label]="label" color="success"></uni-button-toggle>
            <uni-button-toggle [label]="label" color="warning"></uni-button-toggle>
            <uni-button-toggle [label]="label" color="error"></uni-button-toggle>
        `,
        props: { label }
    }))
    .add('Button toggle group', () => ({
        moduleMetadata,
        template: `
            <uni-button-group>
                <uni-button-toggle label="1" color="default"></uni-button-toggle>
                <uni-button-toggle label="2" color="default"></uni-button-toggle>
                <uni-button-toggle label="3" color="default"></uni-button-toggle>
                <uni-button-toggle label="4" color="default"></uni-button-toggle>
            </uni-button-group>
        `
    }))
    ;
