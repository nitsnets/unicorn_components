import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[droppable]'
})
export class UniDroppableDirective {
    @HostListener('dragenter', ['$event']) dragenter = this.onDragEnter;
    @HostListener('dragleave', ['$event']) dragleave = this.onDragLeave;

    @Output() uniDragenter: EventEmitter<{ dataTransfer: DataTransfer, sourceEvent: DragEvent }> = new EventEmitter();
    @Output() uniDragleave: EventEmitter<{ dataTransfer: DataTransfer, sourceEvent: DragEvent }> = new EventEmitter();

    first = false;
    second = false;

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
