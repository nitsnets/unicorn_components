import { UniClickOutsideDirective } from '../../../directives/clickoutside.directive';
import { UniSelectComponent } from '../select/select.component';
import { UniInputComponent } from '../input/input.component';
import { UniSeparatorComponent } from '../../utils/separator/separator.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniChipComponent } from '../../utils/chip/chip.component';
import { storiesOf } from '@storybook/angular';
import { HighlightPipe } from '../../../pipes/highlight.pipe';
import { UniButtonComponent } from '../../ui/button/button.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { UniCheckboxComponent } from '../checkbox/checkbox.component';
import { UniLinkPickerComponent } from './link-picker.component';
import { UniAutofocusDirective } from '../../../directives/autofocus.directive';

const moduleMetadata = {
    declarations: [
        UniCheckboxComponent,
        UniSelectComponent,
        UniSeparatorComponent,
        UniChipComponent,
        UniInputComponent,
        UniIconComponent,
        HighlightPipe,
        UniClickOutsideDirective,
        UniSpinnerComponent,
        UniButtonComponent,
        UniAutofocusDirective
    ]
};
const component = UniLinkPickerComponent;

const options = [
    { label: 'Home', sublabel: '/', value: '/', icon: 'home' },
    { label: 'Users list', sublabel: '/users', value: '/users', icon: 'list' },
    { label: 'Products', sublabel: '/products', value: '/products', icon: 'list' },
    { label: 'Profile', sublabel: '/profile', value: '/profile', icon: 'person' }
];

storiesOf('Link picker', module)
    .add('Basic', () => ({
        moduleMetadata, component, props: {
            options
        }
    }))
