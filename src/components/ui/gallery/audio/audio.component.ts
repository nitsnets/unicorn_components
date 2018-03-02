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
    selector: 'uni-gallery-audio',
    templateUrl: 'audio.component.html'
})
export class UniGalleryAudioComponent extends UniImageComponent implements AfterViewInit, OnChanges {
    @HostBinding(`class.uni-gallery-audio`) subClassName = true;

    @Input() label: string;
    @Input() audioPath: string;

    @Input()
    @HostBinding(`class.uni-gallery-audio--selected`)
    selected = false;
    @Output() selectedChange = new EventEmitter();

    @Input()
    @HostBinding(`class.uni-gallery-audio--deleting`)
    deleting = false;
    @Output() delete = new EventEmitter();

    @HostBinding(`class.uni-gallery-audio--deleting-selection`)
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
