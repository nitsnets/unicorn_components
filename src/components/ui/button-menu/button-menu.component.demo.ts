import { UniMenuContainerComponent } from './../menu/container/container.component';
import { UniMenuComponent, UniMenuTriggerDirective } from './../menu/menu.component';
import { UniMenuItemComponent } from './../menu/item/item.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { UniButtonComponent } from '../../ui/button/button.component';
import { UniButtonMenuComponent } from '../../ui/button-menu/button-menu.component';
import { UniButtonGroupComponent } from '../../ui/button-group/button-group.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniMenuComponent,
        UniMenuContainerComponent,
        UniIconComponent,
        UniSpinnerComponent,
        UniButtonComponent,
        UniButtonMenuComponent,
        UniButtonGroupComponent,
        UniMenuTriggerDirective,
        UniMenuItemComponent
    ]
};
const items = `
    <uni-menu-item label="Create" icon="add"></uni-menu-item>
    <uni-menu-item label="Complete" icon="check"></uni-menu-item>
    <uni-menu-item label="Delete" icon="close"></uni-menu-item>
`;
storiesOf('Menu', module)
    .add('Button triggered', () => ({
        moduleMetadata, template: `
        <uni-button-menu color="default" label="Click me!"> ${items} </uni-button-menu>
    `}))
    .add('Button group triggered', () => ({
        moduleMetadata, template: `
        <uni-button-group>
            <uni-button label="Other button" color="default"></uni-button>
            <uni-button-menu color="default"> ${items} </uni-button-menu>
        </uni-button-group>
    `}))
    ;
