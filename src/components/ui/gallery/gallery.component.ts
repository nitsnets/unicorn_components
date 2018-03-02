import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    ViewContainerRef
} from '@angular/core';

import { UniGalleryFullImageComponent } from './full-image/full-image.component';
import { UniGalleryImage } from '../../../models/image';

@Component({
    selector: 'uni-gallery',
    templateUrl: 'gallery.component.html'
})
export class UniGalleryComponent {
    @HostBinding('class.uni-gallery') componentClass = true;

    @Input() images: UniGalleryImage[];

    _imagesSelected = [];
    set imagesSelected(value: number[]) {
        this._imagesSelected = value;
        if (!this._imagesSelected.length) {
            this.deletingSelection = false;
        }
    };
    get imagesSelected(): number[] {
        return this._imagesSelected;
    };

    @HostBinding('class.uni-gallery--deleting')
    deletingSelection = false;

    @Output() select = new EventEmitter<UniGalleryImage[]>();
    @Output() delete = new EventEmitter<UniGalleryImage[]>();

    fullImageComponent: ComponentRef<UniGalleryFullImageComponent>;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private cmpFactoryResolver: ComponentFactoryResolver
    ) {
        console.log('int: ', this.images);
    }

    onSelect(value: boolean, i: number) {
        const currSelectedIndex = this.imagesSelected.indexOf(i);
        if (value && currSelectedIndex === -1) {
            this.imagesSelected.push(i);
        } else if (!value && currSelectedIndex !== -1) {
            this.imagesSelected.splice(currSelectedIndex, 1);
        }
        this.select.emit(this.imagesSelected.map(index => this.images[index]));
    }
    onSelectAll(value: boolean) {
        if (value) {
            this.imagesSelected = this.images.map((img, i) => i);
            this.select.emit(this.images);
        } else {
            this.imagesSelected = [];
            this.select.emit([]);
        }
    }
    onCleanSelected() {
        this.imagesSelected = [];
        this.select.emit([]);
    }
    isSelected(image: number | UniGalleryImage) {
        if (typeof image === 'number') {
            return this.imagesSelected.indexOf(image) !== -1;
        } else {
            const index = this.images.indexOf(image);
            return index === -1 ? false : this.imagesSelected.indexOf(index);
        }
    }

    onDelete(i: number, image: UniGalleryImage) {
        this.delete.emit([image]);
    }
    onDeleteSelection() {
        this.delete.emit(this.imagesSelected.map(index => this.images[index]));
        this.onCleanSelected();
    }
    anySelected() {
        return this.imagesSelected.length > 0;
    }
    areAllSelected() {
        return this.imagesSelected.length === this.images.length;
    }
    openFullImage(i: number) {
        if (this.fullImageComponent) {
            this.fullImageComponent.destroy();
        }
        this.fullImageComponent = this.viewContainerRef.createComponent(
            this.cmpFactoryResolver.resolveComponentFactory(UniGalleryFullImageComponent)
        );
        this.fullImageComponent.instance.init(this.images, i);
        this.fullImageComponent.instance.close.subscribe(
            () => this.fullImageComponent.destroy()
        );
    }
}

