import { Component, HostBinding } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

import { UniGalleryImage } from '../../../../models/image';

@Component({
    selector: 'uni-gallery-full-image',
    templateUrl: 'full-image.component.html'
})
export class UniGalleryFullImageComponent {
    @HostBinding(`class.uni-gallery-full-image`) subClassName = true;

    @Input() images: UniGalleryImage[] = [];
    get image(): UniGalleryImage {
        return this.images && this.index >= 0 ? this.images[this.index] : null;
    }
    @Input() index: number;
    @Output() indexChange = new EventEmitter<number>();

    @Output() close = new EventEmitter<number>();
    @Output() delete = new EventEmitter<number>();

    infoShown = false;
    deleting = false;

    init(images: UniGalleryImage[], currentIndex: number) {
        this.images = images;
        this.index = currentIndex;
    }
    download(image: UniGalleryImage) {
        if (!image.src) { return; }
        const save = document.createElement('a');
        save.href = image.src;
        save.target = '_blank';
        save.download = image.name;
        save.click();
    }
    onDelete() {
        this.delete.emit(this.index);
    }

}

