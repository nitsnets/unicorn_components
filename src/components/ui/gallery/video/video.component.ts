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

import { UniImageComponent } from '../../../utils/image/image.component'

@Component({
    selector: 'uni-gallery-video',
    templateUrl: 'video.component.html'
})
export class UniGalleryVideoComponent extends UniImageComponent implements AfterViewInit, OnChanges {
    @HostBinding(`class.uni-gallery-video`) subClassName = true;

    @Input() label: string;
    @Input() videoPath: string;

    @Input()
    @HostBinding(`class.uni-gallery-video--selected`)
    selected = false;
    @Output() selectedChange = new EventEmitter();

    @Input()
    @HostBinding(`class.uni-gallery-video--deleting`)
    deleting = false;
    @Output() delete = new EventEmitter();

    @HostBinding(`class.uni-gallery-video--deleting-selection`)
    get isDeleting() {
        return this.selected && this.deletingSelection;
    }

    @Input() deletingSelection = false;

    constructor(elementRef: ElementRef) {
        super(elementRef);
    }
    onSelect(value: boolean) {
        this.selected = value;
        this.selectedChange.emit(value);
    }
    onDeleting(value: boolean) {
        this.deleting = value;
    }
    onDelete() {
        this.delete.emit(true);
    }
}
