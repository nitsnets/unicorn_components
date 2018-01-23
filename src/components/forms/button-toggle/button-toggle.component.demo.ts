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
        UniButtonComponent,
        UniSpinnerComponent,
        UniButtonToggleComponent,
        UniIconComponent,
        UniButtonGroupComponent
    ]
};
const label = 'Click here!'

storiesOf('Checkables/Button toggle', module)
    .add('Basic', () => ({
        moduleMetadata,
        component: UniButtonComponent,
        props: { label }
    }))
    .add('Colors', () => ({
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
    .add('Group', () => ({
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
