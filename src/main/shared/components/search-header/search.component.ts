import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'go-search-header',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
})
export class GoSearchHeaderComponent implements OnInit {
    @Input() goModel;
    @Output() goModelChange = new EventEmitter();
    @Input() placeholder: string = '';
    @Input() value: string = '';
    @Input() debounce: number = 0;

    constructor() { }

    ngOnInit() { }
    onGoModelChange(event) {
        this.goModel = event;
        this.goModelChange.emit(event);
    }
    clear() {
        this.goModel = '';
        this.goModelChange.emit(this.goModel);
    }
}
