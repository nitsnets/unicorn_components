
import { UniTabsComponent } from './tabs.component';
import { UniTabsItemComponent } from './item/item.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniTabsComponent,
        UniTabsItemComponent,
    ]
};
const label = 'Click here!'
const lorem1 = 'Est labore fugiat irure aliquip laborum minim ea eu in irure pariatur nulla.';
const lorem2 = 'Do ea do qui do in exercitation eu eiusmod fugiat dolor dolore voluptate adipisicing magna.'
const lorem3 = 'Sunt culpa laborum minim consectetur laboris et deserunt nostrud sint esse.'

storiesOf('Tabs', module)
    .add('Basic', () => ({
        moduleMetadata, template: `
        <uni-tabs [tabs]="[
            {label: 'Tab 1'},
            {label: 'Tab 2'},
            {label: 'Tab 3'}
        ]"></uni-tabs>
    `}))
    .add('Small', () => ({
        moduleMetadata, template: `
        <uni-tabs size="small" [tabs]="[
            {label: 'Tab 1'},
            {label: 'Tab 2'},
            {label: 'Tab 3'}
        ]"></uni-tabs>
    `}))
    .add('Tab items', () => ({
        moduleMetadata, template: `
        <uni-tabs>
            <uni-tabs-item label="Tab 1"> </uni-tabs-item>
            <uni-tabs-item label="Tab 2"> </uni-tabs-item>
            <uni-tabs-item label="Tab 3"> </uni-tabs-item>
        </uni-tabs>
    `}))
    .add('Force selected', () => ({
        moduleMetadata, template: `
        <uni-tabs [tabSelected]="2">
            <uni-tabs-item label="Tab 1"> </uni-tabs-item>
            <uni-tabs-item label="Tab 2"> </uni-tabs-item>
            <uni-tabs-item label="Tab 3"> </uni-tabs-item>
        </uni-tabs>
    `}))
    .add('Keyed tabs', () => ({
        moduleMetadata, template: `
        <uni-tabs tabSelected="mytab3">
            <uni-tabs-item label="Tab 1" value="mytab1"> </uni-tabs-item>
            <uni-tabs-item label="Tab 2" value="mytab2"> </uni-tabs-item>
            <uni-tabs-item label="Tab 3" value="mytab3"> </uni-tabs-item>
        </uni-tabs>
    `}))
    .add('Track selected', () => ({
        moduleMetadata, template: `
        <uni-tabs [(tabSelected)]="selected">
            <uni-tabs-item label="Tab 1" value="mytab1"> </uni-tabs-item>
            <uni-tabs-item label="Tab 2" value="mytab2"> </uni-tabs-item>
            <uni-tabs-item label="Tab 3" value="mytab3"> </uni-tabs-item>
        </uni-tabs>
        <p *ngIf="selected !== -1">The tab {{selected}} is selected</p>
    `}))
    .add('Content integrated', () => ({
        moduleMetadata, template: `
        <uni-tabs [(tabSelected)]="selected">
            <uni-tabs-item label="Tab 1"> </uni-tabs-item>
            <uni-tabs-item label="Tab 2"> </uni-tabs-item>
            <uni-tabs-item label="Tab 3"> </uni-tabs-item>
        </uni-tabs>
        <div [ngSwitch]="selected">
            <ng-container *ngSwitchCase="0"> Content for Tab 1: ${lorem1} </ng-container>
            <ng-container *ngSwitchCase="1"> Content for Tab 2: ${lorem2} </ng-container>
            <ng-container *ngSwitchCase="2"> Content for Tab 3: ${lorem3}</ng-container>
            <ng-container *ngSwitchDefault> Please select a tab </ng-container>
        </div>
    `}))
    ;
