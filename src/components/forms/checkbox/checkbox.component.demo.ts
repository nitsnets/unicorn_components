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
        UniIconComponent,
    ]
};
const label = 'Click here!'

storiesOf('Checkables/Checkbox', module)
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
    }));
