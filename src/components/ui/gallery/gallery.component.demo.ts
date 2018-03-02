import { FormatDatePipe } from './../../../pipes/format-date.pipe';
import { UniIconComponent } from './../../utils/icon/icon.component';
import { UniButtonComponent } from '../button/button.component';
import { UniSpinnerComponent } from '../../utils/spinner/spinner.component';

import { storiesOf } from '@storybook/angular';
import * as moment from 'moment';
import { UniGalleryComponent } from './gallery.component';
import { UniCheckboxComponent } from '../../forms/checkbox/checkbox.component';
import { UniRowComponent } from '../../containers/row/row.component';
import { UniRowSpacerComponent } from '../../containers/row-spacer/row-spacer.component';
import { UniGalleryImageComponent } from './image/image.component';
import { UniGalleryVideoComponent } from './video/video.component';
import { UniGalleryTextComponent } from './text/text.component';
import { UniGalleryAudioComponent } from './audio/audio.component';
import { UniGalleryFullImageComponent } from './full-image/full-image.component';
import { UniButtonHeaderComponent } from '../button-header/button-header.component';
import { UniHeaderComponent } from '../../containers/header/header.component';
import { UniInputComponent } from '../../forms/input/input.component';
import { UniAsideComponent } from '../../containers/aside/aside.component';
import { UniLayoutComponent } from '../../containers/layout/layout.component';
import { UniChipComponent } from '../../utils/chip/chip.component';



const moduleMetadata = {
    declarations: [
        UniButtonComponent,
        UniIconComponent,
        UniCheckboxComponent,
        UniRowComponent,
        UniRowSpacerComponent,
        UniGalleryComponent,
        UniGalleryImageComponent,
        UniGalleryAudioComponent,
        UniGalleryVideoComponent,
        UniGalleryTextComponent,
        UniGalleryFullImageComponent,
        UniButtonHeaderComponent,
        UniHeaderComponent,
        UniInputComponent,
        UniAsideComponent,
        UniLayoutComponent,
        UniChipComponent,
        UniSpinnerComponent,
        FormatDatePipe
    ],
    entryComponents : [
        UniGalleryFullImageComponent
    ]
};
storiesOf('Gallery', module)
    .add('Basic', () => ({
        moduleMetadata, component: UniGalleryComponent, props: {
            images: [
                {
                    "type": "image",
                    "src": "https://feeding.schlosser.io/img/food/250/2015-01-01.19.47.28.jpg",
                    "thumbSrc": "https://feeding.schlosser.io/img/food/20/2015-01-01.19.47.28.jpg",
                    "name": "2015-01-01:19:47:28",
                    "aspectRatio": 1.7777
                },
                {
                    "type": "audio",
                    "src": "https://feeding.schlosser.io/img/food/250/2015-01-01.19.47.28.jpg",
                    "name": "a-2015-01-01:19:47:28"
                },
                {
                    "type": "video",
                    "src": "https://feeding.schlosser.io/img/food/250/2015-01-01.19.47.28.jpg",
                    "name": "v-2015-01-01:19:47:28"
                },
                {
                    "type": "text",
                    "src": "https://feeding.schlosser.io/img/food/250/2015-01-01.19.47.28.jpg",
                    "name": "t-2015-01-01:19:47:28"
                }
            ]
        }
    }))

    // .add('Border', () => ({
    //     moduleMetadata, component: UniCalendarComponent, props: {
    //         bordered: true
    //     }
    // }))
    // .add('Min and max', () => ({
    //     moduleMetadata, component: UniCalendarComponent, props: {
    //         min: moment().subtract(3, 'd').format('YYYY-MM-DD'),
    //         max: moment().add(3, 'd').format('YYYY-MM-DD'),
    //     }
    // }))
    // .add('Range from', () => ({
    //     moduleMetadata, component: UniCalendarComponent, props: {
    //         rangeFrom: moment().subtract(3, 'd').format('YYYY-MM-DD'),
    //     }
    // }))
    // .add('Range to', () => ({
    //     moduleMetadata, component: UniCalendarComponent, props: {
    //         rangeTo: moment().add(3, 'd').format('YYYY-MM-DD'),
    //     }
    // }))
    // .add('Track value', () => ({
    //     moduleMetadata, component: UniCalendarComponent, template: `
    //         <uni-calendar [(model)]="value"></uni-calendar>
    //         <p *ngIf="value">The value is {{value | formatDate : 'DD/MM/YYYY'}}</p>
    //     `
    // }))

