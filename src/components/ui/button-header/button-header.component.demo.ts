import { UniRowSpacerComponent } from './../../containers/row-spacer/row-spacer.component';
import { UniRowComponent } from './../../containers/row/row.component';
import { UniHeaderComponent } from './../../containers/header/header.component';
import { UniIconComponent } from './../../utils/icon/icon.component';
import { UniButtonHeaderComponent } from './button-header.component';
import { UniButtonComponent } from './../button/button.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';

import { storiesOf } from '@storybook/angular';
import { UniSeparatorComponent } from '../../utils/separator/separator.component';

const moduleMetadata = {
    declarations: [
        UniHeaderComponent,
        UniRowComponent,
        UniButtonHeaderComponent,
        UniIconComponent,
        UniButtonComponent,
        UniSpinnerComponent,
        UniRowSpacerComponent,
        UniSeparatorComponent
    ]
};

storiesOf('Buttons/Header', module)
    .add('Basic', () => ({
        moduleMetadata, template: `
            <uni-header>
                <uni-button-header label="Button label 1"></uni-button-header>
                <uni-button-header label="Button label 2"></uni-button-header>
                <uni-button-header label="Button label 3"></uni-button-header>
            </uni-header>
        `
    }))
    .add('Icons', () => ({
        moduleMetadata, template: `
            <uni-header>
                <uni-button-header icon="close"></uni-button-header>
                <uni-button-header icon="add" label="New"></uni-button-header>
                <uni-button-header icon="check"></uni-button-header>
            </uni-header>
        `
    }))
    .add('Spacer', () => ({
        moduleMetadata, template: `
            <uni-header>
                <uni-button-header label="Home"></uni-button-header>
                <uni-button-header icon="add" label="New"></uni-button-header>
                <uni-row-spacer></uni-row-spacer>
                <uni-button-header icon="person"></uni-button-header>
            </uni-header>
        `
    }))
    ;

