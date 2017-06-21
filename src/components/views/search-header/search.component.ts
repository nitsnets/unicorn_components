import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'uni-search-header',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
})
export class UniSearchHeaderComponent implements OnInit {
    @Input() uniModel;
    @Output() uniModelChange = new EventEmitter();
    @Input() placeholder = '';
    @Input() value = '';
    @Input() debounce = 0;

    constructor() { }

    ngOnInit() { }
    onUniModelChange(event) {
        this.uniModel = event;
        this.uniModelChange.emit(event);
    }
    clear() {
        this.uniModel = '';
        this.uniModelChange.emit(this.uniModel);
    }
}
