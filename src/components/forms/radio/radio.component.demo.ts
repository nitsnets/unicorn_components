import { UniRadioComponent } from './radio.component';
import { UniButtonComponent } from '../../ui/button/button.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniButtonToggleComponent } from '../button-toggle/button-toggle.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { storiesOf } from '@storybook/angular';
import { UniButtonGroupComponent } from '../../ui/button-group/button-group.component';
import { UniButtonToggleGroupComponent } from '../button-toggle-group/button-toggle-group.component';
import { UniRadioGroupComponent } from '../radio-group/radio-group.component';

const moduleMetadata = {
    declarations: [
        UniRadioComponent,
        UniRadioGroupComponent,
        UniButtonComponent,
        UniSpinnerComponent,
        UniButtonToggleComponent,
        UniIconComponent,
        UniButtonGroupComponent,
        UniButtonToggleGroupComponent
    ]
};
const label = 'Click here!'

storiesOf('Radio', module)
    .add('Basic', () => ({ moduleMetadata, component: UniRadioComponent }))
    .add('Label', () => ({
        moduleMetadata,
        component: UniRadioComponent,
        props: { label }
    }))
    .add('Group', () => ({
        moduleMetadata,
        template: `
            <uni-radio-group>
                <uni-radio value="1"></uni-radio>
                <uni-radio value="2"></uni-radio>
                <uni-radio value="3"></uni-radio>
            </uni-radio-group>
        `,
    }))
    .add('Group and label', () => ({
        moduleMetadata,
        template: `
            <uni-radio-group>
                <uni-radio value="1" label="Option 1"></uni-radio>
                <uni-radio value="2" label="Option 2"></uni-radio>
                <uni-radio value="3" label="Option 3"></uni-radio>
            </uni-radio-group>
        `,
    }))
    .add('Value tracking', () => ({
        moduleMetadata,
        template: `
            <uni-radio-group [(model)]="selected">
                <uni-radio value="1" label="Option 1"></uni-radio>
                <uni-radio value="2" label="Option 2"></uni-radio>
                <uni-radio value="3" label="Option 3"></uni-radio>
            </uni-radio-group>
            <p>Selected de option {{selected}}</p>
        `,
    }))
    .add('Toggle buttons', () => ({
        moduleMetadata,
        template: `
            <uni-button-toggle-group>
                <uni-button-toggle color="default" value="1" label="Option 1"></uni-button-toggle>
                <uni-button-toggle color="default" value="2" label="Option 2"></uni-button-toggle>
                <uni-button-toggle color="default" value="3" label="Option 3"></uni-button-toggle>
            </uni-button-toggle-group>
        `,
    }))
    ;
