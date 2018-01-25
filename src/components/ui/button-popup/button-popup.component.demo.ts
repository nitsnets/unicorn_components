import { UniPopupComponent, UniPopupTriggerDirective } from '../../containers/popup/popup.component';
import { UniPopupContainerComponent } from '../../containers/popup/container/container.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { UniButtonComponent } from '../button/button.component';
import { UniButtonPopupComponent } from '../button-popup/button-popup.component';
import { UniButtonGroupComponent } from '../button-group/button-group.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniPopupComponent,
        UniPopupContainerComponent,
        UniIconComponent,
        UniSpinnerComponent,
        UniButtonComponent,
        UniButtonPopupComponent,
        UniButtonGroupComponent,
        UniPopupTriggerDirective
    ]
};
const label = 'Click here!'
const lorem = 'Est labore fugiat irure aliquip laborum minim ea eu in irure pariatur nulla.';

storiesOf('Popup', module)
    .add('Button triggered', () => ({
        moduleMetadata, template: `
        <uni-button-popup label="${label}" color="default" iconRight="add_circle">
            ${lorem}
        </uni-button-popup>
    `}))
    .add('Button group triggered', () => ({
        moduleMetadata, template: `
        <uni-button-group>
            <uni-button color="default" label="Action button"></uni-button>
            <uni-button-popup color="default" iconRight="info">
                ${lorem}
            </uni-button-popup>
        </uni-button-group>
    `}))
    ;
