import { UniMenuItemComponent } from './item/item.component';
import { UniMenuComponent, UniMenuTriggerDirective } from './menu.component';
import { UniMenuContainerComponent } from './container/container.component';
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
const label = 'Click here!'
const items = `
    <uni-button-menu-item label="Create" icon="add"></uni-menu-item>
    <uni-button-menu-item label="Complete" icon="check"></uni-menu-item>
    <uni-button-menu-item label="Delete" icon="close"></uni-menu-item>
`;
storiesOf('Menu', module)
    .add('Button triggered', () => ({
        moduleMetadata, template: `
        <uni-button-menu label="Click me!"> ${items} </uni-button-menu>
    `}))
    ;
