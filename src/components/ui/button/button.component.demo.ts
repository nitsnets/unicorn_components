import { UniButtonComponent } from './button.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { storiesOf } from '@storybook/angular';


const moduleMetadata = {declarations: [ UniIconComponent, UniSpinnerComponent ]};
const component = UniButtonComponent;
const label = 'Hello button!';
const icon = 'check';

storiesOf('Button', module)
    .add('Basic', () => ({ component, moduleMetadata, props: {
            label,
    }}))
    .add('Basic default', () => ({ component, moduleMetadata, props: {
            label,
            color: 'default',
    }}))
    .add('Basic primary', () => ({ component, moduleMetadata, props: {
            label,
            color: 'primary',
    }}))
    .add('Basic success', () => ({ component, moduleMetadata, props: {
            label,
            color: 'success',
    }}))
    .add('Basic warning', () => ({ component, moduleMetadata, props: {
            label,
            color: 'warning',
    }}))
    .add('Basic error', () => ({ component, moduleMetadata, props: {
            label,
            color: 'error',
    }}))
    .add('Icon default', () => ({ component, moduleMetadata, props: {
            icon,
            color: 'default',
    }}))
    .add('Icon and label', () => ({ component, moduleMetadata, props: {
            label,
            icon,
            color: 'default',
    }}))
    .add('Icon right and label', () => ({ component, moduleMetadata, props: {
            label,
            iconRight: icon,
            color: 'default',
    }}))
    .add('Icon left, right and label', () => ({ component, moduleMetadata, props: {
            label,
            icon,
            iconRight: icon,
            color: 'default',
    }}))
    .add('Small default', () => ({ component, moduleMetadata, props: {
            label,
            size: 'small',
            color: 'default',
    }}))
    .add('Small and icon', () => ({ component, moduleMetadata, props: {
            label,
            icon,
            size: 'small',
            color: 'default',
    }}))
    .add('Large default', () => ({ component, moduleMetadata, props: {
            label,
            size: 'large',
            color: 'default',
    }}))
    .add('Large icon', () => ({ component, moduleMetadata, props: {
            icon,
            size: 'large',
            color: 'default',
    }}))
    .add('Large and sublabel', () => ({ component, moduleMetadata, props: {
            label,
            sublabel: label,
            size: 'large',
            color: 'default',
    }}))
    .add('Large, icon and sublabel', () => ({ component, moduleMetadata, props: {
            label,
            icon,
            sublabel: label,
            size: 'large',
            color: 'default',
    }}))
    .add('Loading and label', () => ({ component, moduleMetadata, props: {
            label,
            icon: 'loading',
            color: 'default',
    }}))
    .add('Loading large', () => ({ component, moduleMetadata, props: {
            label,
            icon: 'loading',
            sublabel: label,
            size: 'large',
            color: 'default',
    }}))
;
