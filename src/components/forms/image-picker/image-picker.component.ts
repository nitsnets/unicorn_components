import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'uni-image-picker',
    templateUrl: 'image-picker.component.html',
    styleUrls: ['image-picker.component.scss'],
})
export class UniImagePickerComponent extends UniInputBaseComponent implements OnChanges {
    @ViewChild('inputFile') inputFile: ElementRef;

    @Input() width = 150;
    @Input() height = 30;

    @Input() imageData = null;
    @Output() imageDataChange = new EventEmitter();

    dragging = false;

    ngOnChanges(changes) {
        if (changes.uniModel) {
            if (this.uniModel && this.uniModel instanceof Blob) {
                const reader = new FileReader();

                reader.readAsDataURL(this.uniModel);
                reader.onload = (e: any) => {
                    this.imageData = e.target.result;
                    this.imageDataChange.emit(this.imageData);
                };
            } else {
                this.imageData = null;
                if (this.inputFile) { this.inputFile.nativeElement.value = null; }
            }
        }
    }
    onImagePicked(event) {
        if (!event.target.files || !event.target.files.length) { return false; }
        this.uniModelChange.emit(event.target.files[0]);
    }
    onDragEnter(event) {
        this.dragging = true;
    }
    onDragOver(event) {
        event.dataTransfer.dropEffect = 'copy';
        event.preventDefault();
    }
    onDragLeave(event) {
        this.dragging = false;
    }
    onDrop(event) {
        this.dragging = false;
        if (!event.dataTransfer.files || !event.dataTransfer.files.length) { return false; }
        this.uniModelChange.emit(event.dataTransfer.files[0]);
        event.preventDefault();
    }
    clear() {
        this.uniModelChange.emit(null);
        this.imageDataChange.emit('');
    }
}
