import { Component, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'nts-image-picker',
    templateUrl: 'image-picker.component.html',
    styleUrls: ['image-picker.component.scss'],
})
export class NtsImagePickerComponent implements OnChanges {
    @Input() image: Blob;
    @Output() imageChange = new EventEmitter();

    @ViewChild('inputFile') inputFile: ElementRef;

    @Input() imageData = null;
    @Output() imageDataChange = new EventEmitter();



    dragging = false;

    constructor() { }

    ngOnChanges(changes) {
        if (changes.image) {
            if (this.image && this.image instanceof Blob) {
                let reader = new FileReader();

                reader.readAsDataURL(this.image);
                reader.onload = (e: any) => {
                    this.imageData = e.target.result;
                    this.imageDataChange.emit(this.imageData);
                };
            } else {
                // this.imageData = null;
                // if (this.inputFile) { this.inputFile.nativeElement.value = null; }
            }
        }
    }
    onImagePicked(event) {
        if (!event.target.files || !event.target.files.length) { return false; }
        this.imageChange.emit(event.target.files[0]);
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
        this.imageChange.emit(event.dataTransfer.files[0]);
        event.preventDefault();
    }
    clear() {
        this.imageChange.emit(null);
        this.imageDataChange.emit('');
    }
}
