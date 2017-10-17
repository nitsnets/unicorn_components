import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    OnChanges,
    Output
} from '@angular/core';
const CLASS_NAME = 'uni-image';

@Component({
    selector: 'uni-image',
    template: ''
})
export class UniImageComponent implements AfterViewInit, OnChanges {
    @HostBinding(`class.uni-image`) className = true;
    @Input() @HostBinding(`style.width.px`) width;
    @Input() @HostBinding(`style.height.px`) height;

    @Input() aspectRatio;
    @Input() fit: 'fill' | 'contain' | 'cover';
    @Input() fitThumb = true;
    @Input() autoLoad = true;

    @Input() thumbPath: string;
    @Input() thumbAlt: string;
    @Output() thumbLoad = new EventEmitter();
    thumbLoaded = false;
    thumb: HTMLImageElement;

    @Input() imagePath: string;
    @Input() imageAlt: string;
    @Output() imageLoad = new EventEmitter();
    imageLoaded = false;
    image: HTMLImageElement;

    @Output() clickImage = new EventEmitter();

    visible = false;
    element: HTMLElement;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit() {
        this.element = this.elementRef.nativeElement;
        if (this.autoLoad) { this.load(); }
    }
    ngOnChanges(changes) {
        if (changes.thumbPath && this.thumb) {
            this.resetThumb();
        }
        if (changes.imagePath && this.image) {
            this.resetImage();
        }
        if (changes.width || changes.height || changes.aspectRatio) {
            this.updateDimensions();
        }
    }

    /**
     * Load the image element associated with this ProgressiveImage into the DOM.
     *
     * This function will append the figure into the DOM, create and insert the
     * thumbnail, and create and insert the full image.
     */
    load() {
        if (!this.element) { this.autoLoad = true; return; }
        this.visible = true;
        setTimeout(() => {
            // The image was hidden very quickly after being loaded, so don't load it at all.
            if (!this.visible) { return; }

            this.loadThumb();
            this.loadImage();
        }, 100);
    };

    /**
     * Removes the figure from the DOM, removes the thumbnail and full image, and
     * deletes the this.thumbnail and this.fullImage properties off of the
     * ProgressiveImage object.
     */
    hide() {

        // Remove the images from the element, so that if a user is scrolling super
        // fast, we won't try to load every image we scroll past.
        if (this.element) {
            this.unloadThumb();
            this.unloadImage();
        }

        this.visible = false;

    };
    private updateDimensions() {
        if (!this.aspectRatio ||
            this.width && this.height ||
            !this.width && !this.height
        ) { return; }

        if (this.width && !this.height) {
            this.height = this.width / this.aspectRatio;
        }
        if (this.height && !this.width) {
            this.width = this.height * this.aspectRatio;
        }
    }
    private loadThumb() {
        if (!this.element) { this.autoLoad = true; return; }
        if (!this.thumb) {
            this.thumb = new Image();
            this.thumb.src = this.thumbPath;
            this.thumb.alt = this.thumbAlt;
            this.thumb.classList.add(`${CLASS_NAME}__thumb`);
            if (this.fit && this.fitThumb) {
                this.thumb.classList.add(`${CLASS_NAME}__thumb--${this.fit}`);
            }
            this.thumb.onload = () => {

                // We have to make sure thumbnail still exists, we may have already been
                // deallocated if the user scrolls too fast.

                if (this.thumb) {
                    this.thumbLoad.emit(this.thumb);
                    this.thumb.classList.add(`${CLASS_NAME}__thumb--loaded`);
                }
            };

            this.element.appendChild(this.thumb);
        }
    }
    private loadImage() {
        if (!this.element) { this.autoLoad = true; return; }
        if (!this.image) {
            this.image = new Image();
            this.image.src = this.imagePath;
            this.image.classList.add(`${CLASS_NAME}__inner`);
            if (this.fit) {
                this.image.classList.add(`${CLASS_NAME}__thumb--${this.fit}`);
            }
            this.image.onload = () => {

                // We have to make sure image still exists, we may have already been
                // deallocated if the user scrolls too fast.
                if (this.image) {
                    this.imageLoad.emit(this.image);
                    this.image.classList.add(`${CLASS_NAME}__inner--loaded`);
                }
            };
            this.image.onclick = (event) => this.clickImage.emit(event);
            this.element.appendChild(this.image);
        }
    }
    private unloadThumb() {
        if (this.thumb) {
            this.thumb.src = '';
            this.element.removeChild(this.thumb);
            this.thumbLoad.emit(false);
            delete this.thumb;
        }
    }
    private unloadImage() {
        if (this.image) {
            this.image.src = '';
            this.element.removeChild(this.image);
            this.imageLoad.emit(false);
            delete this.image;
        }
    }
    private resetThumb() {
        this.unloadThumb();
        this.loadThumb();
    }
    private resetImage() {
        this.unloadImage();
        this.loadImage();
    }
}
