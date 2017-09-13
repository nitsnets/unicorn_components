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

import { Observable } from 'rxjs/Observable';
import { UniImageComponent } from '../../../utils/image/image.component'

@Component({
    selector: 'uni-gallery-image',
    templateUrl: 'image.component.html'
})
export class UniGalleryImageComponent extends UniImageComponent implements AfterViewInit, OnChanges {
    @HostBinding(`class.uni-gallery-image`) subClassName = true;

    @Input() label: string;

    @Input() originalHeight: number;
    @Input() originalWidth: number;

    @Input()
    @HostBinding(`class.uni-gallery-image--selected`)
    selected = false;
    @Output() selectedChange = new EventEmitter();

    @Input()
    @HostBinding(`class.uni-gallery-image--deleting`)
    deleting = false;
    @Output() delete = new EventEmitter();

    @HostBinding(`class.uni-gallery-image--deleting-selection`)
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
