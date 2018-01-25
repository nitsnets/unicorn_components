import { UniClickOutsideDirective } from '../../../directives/clickoutside.directive';
import { UniSelectComponent } from './select.component';
import { UniInputComponent } from '../input/input.component';
import { UniSeparatorComponent } from '../../utils/separator/separator.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniChipComponent } from '../../utils/chip/chip.component';
import { storiesOf } from '@storybook/angular';
import { HighlightPipe } from '../../../pipes/highlight.pipe';
const moduleMetadata = {
    declarations: [
        UniSelectComponent,
        UniSeparatorComponent,
        UniChipComponent,
        UniInputComponent,
        UniIconComponent,
        HighlightPipe,
        UniClickOutsideDirective
    ]
};
const component = UniSelectComponent;
const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 }
];

storiesOf('Select', module)
    .add('Basic', () => ({
        moduleMetadata, component, props: {
            filterable: false,
            options
        }
    }))
    .add('Label', () => ({
        moduleMetadata, component, props: {
            label: 'Select label',
            filterable: false,
            options
        }
    }))
    .add('Placeholder', () => ({
        moduleMetadata, component, props: {
            placeholder: 'Select placeholder',
            filterable: false,
            options
        }
    }))
    .add('Icon', () => ({
        moduleMetadata, component, props: {
            icon: 'check',
            filterable: false,
            options
        }
    }))
    .add('Clearable', () => ({
        moduleMetadata, component, props: {
            clear: true,
            filterable: false,
            options
        }
    }))
    .add('Search', () => ({
        moduleMetadata, component, props: {
            options
        }
    }))
    .add('Multiple', () => ({
        moduleMetadata, component, props: {
            options,
            multiple: true
        }
    }))
    .add('Multiple and chips', () => ({
        moduleMetadata, component, props: {
            options,
            multiple: true,
            chips: true
        }
    }))
    ;
