import { UniIconComponent } from './../icon/icon.component';
import { UniAlertComponent } from './alert.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [
        UniAlertComponent,
        UniIconComponent
    ]
};

storiesOf('Alert', module)
    .add('Basic', () => ({
        moduleMetadata, template: `
            <uni-alert [closable]="false">
                Incididunt commodo fugiat cillum laborum id mollit.
            </uni-alert>
        `
    }))
    .add('Closable', () => ({
        moduleMetadata, template: `
            <uni-alert>
                Incididunt commodo fugiat cillum laborum id mollit.
            </uni-alert>
        `
    }))
    .add('Icon', () => ({
        moduleMetadata, template: `
            <uni-alert icon="check">
                Incididunt commodo fugiat cillum laborum id mollit.
            </uni-alert>
        `
    }))
    .add('Colors', () => ({
        moduleMetadata, template: `
            <uni-alert>
                Magna ipsum quis est nostrud sint nisi voluptate pariatur laborum ex deserunt aliqua culpa.
            </uni-alert>
            <uni-alert color="primary">
                Exercitation est officia sit id mollit sint esse do eiusmod proident aliquip sit.
            </uni-alert>
            <uni-alert color="success">
                Veniam ex in officia occaecat non anim.
            </uni-alert>
            <uni-alert color="warning">
                Irure sint eu amet tempor qui nulla proident enim non et.
            </uni-alert>
            <uni-alert color="error">
                Qui velit cupidatat Lorem tempor enim eiusmod enim ut.
            </uni-alert>
        `
    }))
    .add('Colors and icons', () => ({
        moduleMetadata, template: `
            <uni-alert>
                Magna ipsum quis est nostrud sint nisi voluptate pariatur laborum ex deserunt aliqua culpa.
            </uni-alert>
            <uni-alert icon="info_outline" color="primary">
                Exercitation est officia sit id mollit sint esse do eiusmod proident aliquip sit.
            </uni-alert>
            <uni-alert icon="check" color="success">
                Veniam ex in officia occaecat non anim.
            </uni-alert>
            <uni-alert icon="help_outline" color="warning">
                Irure sint eu amet tempor qui nulla proident enim non et.
            </uni-alert>
            <uni-alert icon="error_outline" color="error">
                Qui velit cupidatat Lorem tempor enim eiusmod enim ut.
            </uni-alert>
        `
    }))
    ;
