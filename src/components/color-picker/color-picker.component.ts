// https://github.com/Alberplz/angular2-color-picker

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'nts-color-picker',
    templateUrl: 'color-picker.component.html',
    styleUrls: ['color-picker.component.scss'],
})
export class  NtsColorPickerComponent implements OnInit {
    @Input() color;
    @Output() colorChange = new EventEmitter();

    ngOnInit() {
        if (!this.color) {
            this.color = '#ffffff';
        }

    }

    onColorChange(ev) {
        this.color = ev;
    }

}
