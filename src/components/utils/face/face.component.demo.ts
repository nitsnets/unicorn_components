import { UniIconComponent } from './../icon/icon.component';
import { UniFaceComponent } from './face.component';
import { storiesOf } from '@storybook/angular';
import { UniBadgeComponent } from '../badge/badge.component';

const moduleMetadata = {
    declarations: [
        UniFaceComponent,
        UniIconComponent,
        UniBadgeComponent
    ]
};

storiesOf('Face', module)
    .add('Basic', () => ({
        moduleMetadata,
        component: UniFaceComponent,
        props: {}
    }))
    .add('Initials', () => ({
        moduleMetadata,
        component: UniFaceComponent,
        props: { user: { name: 'Alvaro Yuste' } }
    }))
    .add('Initials small', () => ({
        moduleMetadata,
        component: UniFaceComponent,
        props: { user: { name: 'Alvaro Yuste' }, size: 'small' }
    }))
    .add('Initials big', () => ({
        moduleMetadata,
        component: UniFaceComponent,
        props: { user: { name: 'Alvaro Yuste' }, size: 'big' }
    }))
    .add('Picture', () => ({
        moduleMetadata,
        component: UniFaceComponent,
        props: { user: { name: 'Alvaro Yuste', image: '//avatars3.githubusercontent.com/u/2926495' } }
    }))
    .add('Picture small', () => ({
        moduleMetadata,
        component: UniFaceComponent,
        props: {
            user: {
                name: 'Alvaro Yuste',
                image: '//avatars3.githubusercontent.com/u/2926495'
            },
            size: 'small'
        }
    }))
    .add('Picture big', () => ({
        moduleMetadata,
        component: UniFaceComponent,
        props: {
            user: {
                name: 'Alvaro Yuste',
                image: '//avatars3.githubusercontent.com/u/2926495'
            },
            size: 'big'
        }
    }))
    .add('Badge', () => ({
        moduleMetadata,
        component: UniFaceComponent,
        props: { user: { name: 'Alvaro Yuste', image: '//avatars3.githubusercontent.com/u/2926495' }, badge: 3 }
    }));
