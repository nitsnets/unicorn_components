import { Component, Input } from '@angular/core';

import { Image } from '../../../models/image';

@Component({
    selector: 'uni-gallery',
    templateUrl: 'gallery.component.html'
})
export class UniGalleryComponent {
    @Input() images: Image[];

    selectedIndexes = [];
    onSelect(value: boolean, i: number) {

    }
}
