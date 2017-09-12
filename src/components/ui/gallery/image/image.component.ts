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

const CLASS_NAME = 'uni-gallery-image';

@Component({
    selector: 'uni-gallery-image',
    templateUrl: 'image.component.html'
})
export class UniGalleryImageComponent extends UniImageComponent implements AfterViewInit, OnChanges {
    @HostBinding(`class.${CLASS_NAME}`) subClassName = true;

    @Input() originalHeight: number;
    @Input() originalWidth: number;

    @Input()
    @HostBinding(`class.${CLASS_NAME}--selected`)
    selected = false;
    @Output() selectedChange = new EventEmitter();

    @Input()
    @HostBinding(`class.${CLASS_NAME}--deleting`)
    deleting = false;
    @Output() delete = new EventEmitter();

    @HostBinding(`class.${CLASS_NAME}--deleting-selection`)
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
