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
    selector: 'uni-gallery-text',
    templateUrl: 'text.component.html'
})
export class UniGalleryTextComponent extends UniImageComponent implements AfterViewInit, OnChanges {
    @HostBinding(`class.uni-gallery-text`) subClassName = true;

    @Input() label: string;
    @Input() textPath: string;

    @Input()
    @HostBinding(`class.uni-gallery-text--selected`)
    selected = false;
    @Output() selectedChange = new EventEmitter();

    @Input()
    @HostBinding(`class.uni-gallery-text--deleting`)
    deleting = false;
    @Output() delete = new EventEmitter();

    @HostBinding(`class.uni-gallery-text--deleting-selection`)
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
