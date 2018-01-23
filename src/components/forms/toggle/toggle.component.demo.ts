import { UniCheckboxComponent } from '../checkbox/checkbox.component';
import { UniButtonComponent } from '../../ui/button/button.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniButtonToggleComponent } from '../button-toggle/button-toggle.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { storiesOf } from '@storybook/angular';
import { UniToggleComponent } from '../toggle/toggle.component';
import { UniButtonGroupComponent } from '../../ui/button-group/button-group.component';

const moduleMetadata = {
    declarations: [
        UniToggleComponent,
    ]
};
const label = 'Click here!'

storiesOf('Checkables/Toggle', module)
    .add('Basic', () => ({
        moduleMetadata,
        component: UniToggleComponent
    }))
    .add('Colors', () => ({
        moduleMetadata,
        template: `
            <uni-toggle></uni-toggle>
            <uni-toggle color="primary"></uni-toggle>
            <uni-toggle color="success"></uni-toggle>
            <uni-toggle color="warning"></uni-toggle>
            <uni-toggle color="error"></uni-toggle>
    `}))
    .add('Small', () => ({
        moduleMetadata,
        component: UniToggleComponent,
        props: {
            size: 'small'
        }
    }))
    .add('Labeled', () => ({
        moduleMetadata,
        component: UniToggleComponent,
        props: {
            size: 'small',
            label
        }
    }))
    .add('Squared', () => ({
        moduleMetadata,
        component: UniToggleComponent,
        props: {
            rounded: false
        }
    }))
    .add('Squared and small', () => ({
        moduleMetadata,
        component: UniToggleComponent,
        props: {
            rounded: false,
            size: 'small'
        }
    }))
    .add('Squared and labeled', () => ({
        moduleMetadata,
        component: UniToggleComponent,
        props: {
            rounded: false,
            size: 'small',
            label
        }
    }))
    ;
