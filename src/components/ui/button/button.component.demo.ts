import { ViewEncapsulation } from '@angular/core';
import { UniButtonComponent } from './button.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { storiesOf } from '@storybook/angular';

import { withKnobs, select, text } from '@storybook/addon-knobs/angular';

const moduleMetadata = {
    declarations: [UniIconComponent, UniSpinnerComponent, UniButtonComponent],
    entryComponents: [UniButtonComponent],
};
const component = UniButtonComponent;

const colorKnob = [
    'Color',
    {
        default: 'Default',
        primary: 'Primary',
        success: 'Success',
        warning: 'Warning',
        error: 'Error',
    },
    'default'
];
const labelKnob = ['Label', 'Hello button!'];
const sublabelKnob = ['Sublabel', 'Hello button!'];
const iconKnob = ['Icon left', 'check'];
const iconRightKnob = ['Icon right', 'check'];

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Basic', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            color: select(...colorKnob)
        }
    }))
    .add('Icon ', () => ({
        component, moduleMetadata, props: {
            icon: text(...iconKnob),
            color: select(...colorKnob)
        }
    }))
    .add('Icon and label', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            icon: text(...iconKnob),
            color: select(...colorKnob)
        }
    }))
    .add('Icon right and label', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            color: select(...colorKnob),
            iconRight: text(...iconRightKnob)
        }
    }))
    .add('Icon left, right and label', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            color: select(...colorKnob),
            icon: text(...iconKnob),
            iconRight: text(...iconRightKnob),
        }
    }))
    .add('Small default', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            color: select(...colorKnob),
            size: 'small',
        }
    }))
    .add('Small and icon', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            color: select(...colorKnob),
            icon: text(...iconKnob),
            size: 'small',
        }
    }))
    .add('Large', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            color: select(...colorKnob),
            size: 'large',
        }
    }))
    .add('Large icon', () => ({
        component, moduleMetadata, props: {
            icon: text(...iconKnob),
            color: select(...colorKnob),
            size: 'large',
        }
    }))
    .add('Large and sublabel', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            color: select(...colorKnob),
            sublabel: text(...sublabelKnob),
            size: 'large',
        }
    }))
    .add('Large, icon and sublabel', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            color: select(...colorKnob),
            icon: text(...iconKnob),
            sublabel: text(...sublabelKnob),
            size: 'large',
        }
    }))
    .add('Loading and label', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            color: select(...colorKnob),
            icon: 'loading',
        }
    }))
    .add('Loading large', () => ({
        component, moduleMetadata, props: {
            label: text(...labelKnob),
            color: select(...colorKnob),
            sublabel: text(...sublabelKnob),
            icon: 'loading',
            size: 'large',
        }
    }))
    ;
