import { UniSliderComponent } from './slider.component';
import { UniSliderRangeComponent } from '../slider-range/slider-range.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniSliderComponent,
        UniSliderRangeComponent
    ]
};
const label = 'Slide me!'

storiesOf('Slider', module)
    .add('Basic', () => ({ moduleMetadata, component: UniSliderComponent }))
    .add('Colors', () => ({
        moduleMetadata, template: `
            <uni-slider></uni-slider>
            <uni-slider color="primary"></uni-slider>
            <uni-slider color="success"></uni-slider>
            <uni-slider color="warning"></uni-slider>
            <uni-slider color="error"></uni-slider>
    `}))
    .add('Label', () => ({
        moduleMetadata,
        component: UniSliderComponent,
        props: { label }
    }))
    .add('Track value', () => ({
        moduleMetadata, template: `
            <uni-slider [(model)]="value"></uni-slider>
            <p *ngIf="value">The value is <strong>{{value | number:2-2}}</strong></p>
    `}))
    .add('Min and max', () => ({
        moduleMetadata, template: `
            <uni-slider min="0" max="10" [(model)]="value"></uni-slider>
            <p *ngIf="value">The value is <strong>{{value | number:2-2}}</strong></p>
    `}))
    .add('Debounce', () => ({
        moduleMetadata, template: `
            <uni-slider [(model)]="value" [debounce]="300"></uni-slider>
            <p *ngIf="value">The value is <strong>{{value | number:2-2}}</strong></p>
    `}))
    .add('Range', () => ({ moduleMetadata, component: UniSliderRangeComponent }))
    .add('Track range value', () => ({
        moduleMetadata, template: `
            <uni-slider-range [(model)]="value"></uni-slider-range>
            <p *ngIf="value">
                The value goes
                from <strong>{{value?.from | number:2-2}}</strong>
                to <strong>{{value?.to | number:2-2}}</strong>
            </p>
    `}))
    .add('Range rigid', () => ({
        moduleMetadata, component: UniSliderRangeComponent, props: {
            pushable: false
        }
    }))
    ;
