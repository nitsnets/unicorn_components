import { AfterContentInit, ContentChildren, Directive, ElementRef, HostBinding, Input, OnChanges, QueryList } from '@angular/core';

const defaultOptions = {
    cellSelector: '[ntsCarouselCell]'
};

@Directive({
    selector: '[ntsCarousel]',
})
export class NtsCarouselDirective implements AfterContentInit, OnChanges {
    @HostBinding('style.outline') outline = 'none';

    @ContentChildren('[ntsCarouselCell]') cells: QueryList<any>;

    /**
     * Options of flickity
     */
    @Input() ntsCarousel = {};

    flickity = null;

    constructor(private element: ElementRef) { }

    ngAfterContentInit() {
        this.initCarousel();
        this.cells.changes.subscribe(
            cells => this.initCarousel()
        );
    }

    ngOnChanges(changes) {
        if (changes.ntsCarousel && this.cells) {
            this.initCarousel();
        }
    }

    private initCarousel() {
        console.log('Init');
        if (this.flickity) { this.flickity.destroy(); }
        this.flickity = new Flickity(this.element.nativeElement, Object.assign(defaultOptions, this.ntsCarousel));
    }
}
