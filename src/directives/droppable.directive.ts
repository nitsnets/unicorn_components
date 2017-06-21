import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Directive({
    selector: '[droppable]'
})
export class UniDroppableDirective implements OnInit {
    @HostListener('dragenter', ['$event']) dragenter = this.onDragEnter;
    @HostListener('dragleave', ['$event']) dragleave = this.onDragLeave;

    @Output() uniDragenter = new EventEmitter();
    @Output() uniDragleave = new EventEmitter();

    first = false;
    second = false;

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {

    }
    onDragEnter(e: DragEvent) {
        if (this.first) {
            return this.second = true;
        } else {
            this.first = true;
            this.uniDragenter.emit({
                dataTransfer: e.dataTransfer,
                sourceEvent: e
            });
        }
    }
    onDragLeave(e: DragEvent) {
        if (this.second) {
            this.second = false;
        } else if (this.first) {
            this.first = false;
        }
        if (!this.first && !this.second) {
            this.uniDragleave.emit({
                dataTransfer: e.dataTransfer,
                sourceEvent: e
            });
        }
    }
}
