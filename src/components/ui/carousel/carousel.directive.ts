import {
    AfterContentInit,
    ContentChildren,
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    OnChanges,
    Output,
    QueryList,
} from '@angular/core';

declare const Flickity: any;

const defaultOptions = {
    cellSelector: '[ntsCarouselCell]'
};

@Directive({
    selector: '[ntsCarousel]',
})
export class UniCarouselDirective implements AfterContentInit, OnChanges {
    @HostBinding('style.outline') outline = 'none';

    @ContentChildren('[ntsCarouselCell]') cells: QueryList<any>;

    //  Options of flickity
    @Input() ntsCarousel = {};

    @Output() select = new EventEmitter();
    @Output() settle = new EventEmitter();
    @Output() scroll = new EventEmitter();
    @Output() dragStart = new EventEmitter();
    @Output() dragMove = new EventEmitter();
    @Output() dragEnd = new EventEmitter();
    @Output() pointerDown = new EventEmitter();
    @Output() pointerMove = new EventEmitter();
    @Output() pointerUp = new EventEmitter();
    @Output() staticClick = new EventEmitter();
    @Output() lazyLoad = new EventEmitter();
    @Output() bgLazyLoad = new EventEmitter();

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
        if (this.flickity) { this.flickity.destroy(); }
        this.flickity = new Flickity(this.element.nativeElement, Object.assign(defaultOptions, this.ntsCarousel));

        this.flickity.on('select', () => {
            this.select.emit(this.flickity.selectedIndex);
        });
        this.flickity.on('settle', () => {
            this.settle.emit(this.flickity.selectedIndex);
        });
        this.flickity.on('scroll', (progress) => {
            this.scroll.emit(progress);
        });
        this.flickity.on('dragStart', (event, pointer) => {
            this.dragStart.emit({ event, pointer });
        });
        this.flickity.on('dragMove', (event, pointer, moveVector) => {
            this.dragMove.emit({ event, pointer, moveVector });
        });
        this.flickity.on('dragEnd', (event, pointer) => {
            this.dragEnd.emit({ event, pointer });
        });
        this.flickity.on('pointerDown', (event, pointer) => {
            this.pointerDown.emit({ event, pointer });
        });
        this.flickity.on('pointerMove', (event, pointer, moveVector) => {
            this.pointerMove.emit({ event, pointer, moveVector });
        });
        this.flickity.on('pointerUp', (event, pointer) => {
            this.pointerUp.emit({ event, pointer });
        });
        this.flickity.on('staticClick', (event, pointer, cellElement, cellIndex) => {
            this.staticClick.emit({ event, pointer, cellElement, cellIndex });
        });
        this.flickity.on('lazyLoad', (event, cellElement) => {
            this.lazyLoad.emit({ event, cellElement });
        });
        this.flickity.on('bgLazyLoad', (event, element) => {
            this.bgLazyLoad.emit({ event, element });
        });
    }
}
