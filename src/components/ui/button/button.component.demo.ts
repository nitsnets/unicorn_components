import { UniButtonComponent } from './button.component';
import { UniIconComponent } from '../../utils/icon/icon.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';
import { storiesOf } from '@storybook/angular';

storiesOf('Button', module)
    .add('with text', () => ({
        component: UniButtonComponent,
        props: {
            label: 'Hello Button',
        },
        moduleMetadata: {
            declarations: [ UniIconComponent, UniSpinnerComponent ],
        },
    }));
