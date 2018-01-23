
import { storiesOf } from '@storybook/angular';
import { UniInputComponent } from './input.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniChipComponent } from '../../utils/chip/chip.component';
const moduleMetadata = {
    declarations: [UniInputComponent, UniIconComponent, UniChipComponent]
};
const component = UniInputComponent;

storiesOf('Input', module)
    .add('Basic', () => ({ moduleMetadata, component }))
    .add('Placeholder', () => ({
        moduleMetadata, component, props: {
            placeholder: 'Input placeholder'
        }
    }))
    .add('Label', () => ({
        moduleMetadata, component, props: {
            label: 'Input label'
        }
    }))
    .add('Floating label', () => ({
        moduleMetadata, component, props: {
            floating: true,
            label: 'Input label'
        }
    }))
    .add('Prefix', () => ({
        moduleMetadata, component, props: {
            prefix: '+34'
        }
    }))
    .add('Suffix', () => ({
        moduleMetadata, component, props: {
            suffix: 'Suffix'
        }
    }))
    .add('Prefix and suffix', () => ({
        moduleMetadata, component, props: {
            prefix: 'https://www.',
            suffix: '.com'
        }
    }))
    .add('Icon left', () => ({
        moduleMetadata, component, props: {
            icon: 'check'
        }
    }))
    .add('Icon right', () => ({
        moduleMetadata, component, props: {
            iconRight: 'check'
        }
    }))
    .add('Icon prefix', () => ({
        moduleMetadata, component, props: {
            prefixIcon: 'check'
        }
    }))
    .add('Icon suffix', () => ({
        moduleMetadata, component, props: {
            suffixIcon: 'check'
        }
    }))
    .add('Hint', () => ({
        moduleMetadata, component, props: {
            label: 'email',
            hint: 'i.e.: example@domain.com'
        }
    }))
    .add('Counter', () => ({
        moduleMetadata, component, props: {
            label: 'Counter',
            counter: true
        }
    }))
    .add('Counter with max', () => ({
        moduleMetadata, component, props: {
            label: 'Counter',
            counter: true,
            max: 20
        }
    }))
    .add('Read-only', () => ({
        moduleMetadata, component, props: {
            readonly: true,
            model: 'Fixed value'
        }
    }))
    .add('Autofocus', () => ({
        moduleMetadata, component, props: {
            autofocus: true,
        }
    }))
    .add('Chips', () => ({
        moduleMetadata, component, props: {
            chips: ['tag1', 'tag2'],
        }
    }))
    .add('Min and max number', () => ({
        moduleMetadata, component, props: {
            label: '5 - 10',
            type: 'number',
            maxValue: 10,
            minValue: 5
        }
    }))
    .add('Debounce', () => ({
        moduleMetadata, template: `
            <uni-input [debounce]="1000" label="Debounce 1s" [(model)]="value"></uni-input>
            <p *ngIf="value">The value is {{value}}</p>
        `
    }))
    .add('Textarea', () => ({
        moduleMetadata, component, props: {
            multiline: true
        }
    }))
    ;
