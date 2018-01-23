import { UniIconComponent } from './../../utils/icon/icon.component';
import { UniButtonFileComponent } from './button-file.component';
import { UniButtonComponent } from './../button/button.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';

import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniButtonFileComponent,
        UniIconComponent,
        UniButtonComponent,
        UniSpinnerComponent,
    ]
};
const label = 'Browse a file!'

storiesOf('Buttons/File picker', module)
    .add('Basic', () => ({
        moduleMetadata, component: UniButtonFileComponent, props: {
            color: 'default',
            label: 'Browse a file!'
        }
    }))
    .add('Format acceptance', () => ({
        moduleMetadata, component: UniButtonFileComponent, props: {
            color: 'default',
            label: 'Browse an image!',
            fileType: 'image/*'
        }
    }))
    .add('Track value', () => ({
        moduleMetadata, template: `
            <uni-button-file
                color="default"
                label="Browse a file!"
                (fileChange)="value = $event"
            ></uni-button-file>
            <p *ngIf="value">The file is {{value[0]?.name}}</p>
        `
    }))
    ;

