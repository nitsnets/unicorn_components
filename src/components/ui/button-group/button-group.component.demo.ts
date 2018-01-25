import { UniIconComponent } from './../../utils/icon/icon.component';
import { UniButtonGroupComponent } from './button-group.component';
import { UniButtonComponent } from './../button/button.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';

import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniButtonGroupComponent,
        UniIconComponent,
        UniButtonComponent,
        UniSpinnerComponent,
    ]
};

storiesOf('Buttons/Group', module)
    .add('Basic', () => ({
        moduleMetadata, template: `
            <uni-button-group>
                <uni-button label="Button label 1" color="default"></uni-button>
                <uni-button label="Button label 2" color="default"></uni-button>
                <uni-button label="Button label 3" color="default"></uni-button>
            </uni-button-group>
        `
    }))
    .add('Icons', () => ({
        moduleMetadata, template: `
            <uni-button-group>
                <uni-button icon="close" color="default"></uni-button>
                <uni-button icon="add" color="default"></uni-button>
                <uni-button icon="check" color="default"></uni-button>
            </uni-button-group>
        `
    }))
    .add('Colors', () => ({
        moduleMetadata, template: `
            <uni-button-group>
                <uni-button color="default" icon="close"></uni-button>
                <uni-button color="primary" icon="add"></uni-button>
                <uni-button color="success" icon="check"></uni-button>
                <uni-button color="warning" label="Label 1"></uni-button>
                <uni-button color="error" label="Label 2"></uni-button>
            </uni-button-group>
        `
    }))
    ;

