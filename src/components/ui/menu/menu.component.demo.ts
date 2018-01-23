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
    <uni-menu-item label="Create" icon="add"></uni-menu-item>
    <uni-menu-item label="Complete" icon="check"></uni-menu-item>
    <uni-menu-item label="Delete" icon="close"></uni-menu-item>
`;
storiesOf('Menu', module)
    .add('Basic', () => ({
        moduleMetadata, template: `
        <uni-menu>
            <p uniMenuTrigger> ${label} </p>
            <uni-menu-container> ${items} </uni-menu-container>
        </uni-menu>
    `}))
    .add('Force position', () => ({
        moduleMetadata, template: `
        <uni-menu position="top-left">
            <p uniMenuTrigger> ${label} </p>
            <uni-menu-container> ${items} </uni-menu-container>
        </uni-menu>
    `}))
    .add('Force openness', () => ({
        moduleMetadata, template: `
        <uni-menu [opened]="true">
            <p uniMenuTrigger> ${label} </p>
            <uni-menu-container> ${items} </uni-menu-container>
        </uni-menu>
    `}))
    .add('Track openness', () => ({
        moduleMetadata, template: `
        <p>The menu is <strong>{{opened ? 'opened' : 'closed'}}</strong></p>
        <uni-menu [(opened)]="opened">
            <p uniMenuTrigger> ${label} </p>
            <uni-menu-container> ${items} </uni-menu-container>
        </uni-menu>
    `}))
    ;
