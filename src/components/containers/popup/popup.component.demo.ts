import { UniPopupComponent, UniPopupTriggerDirective } from './popup.component';
import { UniPopupContainerComponent } from './container/container.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { UniButtonComponent } from '../../ui/button/button.component';
import { UniButtonPopupComponent } from '../../ui/button-popup/button-popup.component';
import { UniButtonGroupComponent } from '../../ui/button-group/button-group.component';
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
    .add('Basic', () => ({
        moduleMetadata, template: `
        <uni-popup [closable]="false">
            <p uniPopupTrigger> ${label} </p>
            <uni-popup-container> ${lorem} </uni-popup-container>
        </uni-popup>
    `}))
    .add('Close button', () => ({
        moduleMetadata, template: `
        <uni-popup>
            <p uniPopupTrigger> ${label} </p>
            <uni-popup-container> ${lorem} </uni-popup-container>
        </uni-popup>
    `}))
    .add('Close if click inside', () => ({
        moduleMetadata, template: `
        <uni-popup [keepOpen]="false">
            <p uniPopupTrigger> ${label} </p>
            <uni-popup-container> ${lorem} </uni-popup-container>
        </uni-popup>
    `}))
    .add('Force position', () => ({
        moduleMetadata, template: `
        <uni-popup position="top-left">
            <p uniPopupTrigger> ${label} </p>
            <uni-popup-container> ${lorem} </uni-popup-container>
        </uni-popup>
    `}))
    .add('Force openness', () => ({
        moduleMetadata, template: `
        <uni-popup [opened]="true">
            <p uniPopupTrigger> ${label} </p>
            <uni-popup-container> ${lorem} </uni-popup-container>
        </uni-popup>
    `}))
    .add('Track openness', () => ({
        moduleMetadata, template: `
        <p>The popup is <strong>{{opened ? 'opened' : 'closed'}}</strong></p>
        <uni-popup [(opened)]="opened">
            <p uniPopupTrigger> ${label} </p>
            <uni-popup-container> ${lorem} </uni-popup-container>
        </uni-popup>
    `}))
    ;
