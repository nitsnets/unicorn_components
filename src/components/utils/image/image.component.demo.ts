import { UniImageComponent } from './image.component';
import { storiesOf } from '@storybook/angular';

const moduleMetadata = {
    declarations: [UniImageComponent]
};

storiesOf('Image', module)
    .add('Basic', () => ({
        moduleMetadata,
        component: UniImageComponent,
        props: {
            imagePath: 'https://images.unsplash.com/photo-1511858240726-f89c6f5ba6e1?w=400',
            width: 400,
            height: 600
        }
    }))
    .add('Contain', () => ({
        moduleMetadata,
        component: UniImageComponent,
        props: {
            imagePath: 'https://images.unsplash.com/photo-1511858240726-f89c6f5ba6e1?w=400',
            fit: 'contain',
            width: 400,
            height: 400
        }
    }))
    .add('Cover', () => ({
        moduleMetadata,
        component: UniImageComponent,
        props: {
            imagePath: 'https://images.unsplash.com/photo-1511858240726-f89c6f5ba6e1?w=400',
            fit: 'cover',
            width: 400,
            height: 400
        }
    }))
    .add('Not found', () => ({
        moduleMetadata,
        component: UniImageComponent,
        props: {
            imagePath: 'https://images.unsplash.com/asdfasdf',
            imageAlt: 'Image not found message',
            width: 400,
            height: 600
        }
    }))
    .add('Blurred placeholder', () => ({
        moduleMetadata,
        component: UniImageComponent,
        props: {
            thumbPath: 'https://images.unsplash.com/photo-1439209306665-700c9bca794c?w=35&h=25',
            imagePath: 'https://images.unsplash.com/photo-1439209306665-700c9bca794c?w=7000&h=5000',
            width: 700,
            height: 500
        }
    }))
    .add('Blurred background', () => ({
        moduleMetadata,
        component: UniImageComponent,
        props: {
            thumbPath: 'https://images.unsplash.com/photo-1439209306665-700c9bca794c?w=35&h=25',
            imagePath: 'https://images.unsplash.com/photo-1439209306665-700c9bca794c?w=700&h=500',
            fit: 'contain',
            fitThumb: true,
            width: 700,
            height: 250
        }
    }))
