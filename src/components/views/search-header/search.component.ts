import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'uni-search-header',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
})
export class UniSearchHeaderComponent implements OnInit {
    @Input() ntsModel;
    @Output() ntsModelChange = new EventEmitter();
    @Input() placeholder = '';
    @Input() value = '';
    @Input() debounce = 0;

    constructor() { }

    ngOnInit() { }
    onUniModelChange(event) {
        this.ntsModel = event;
        this.ntsModelChange.emit(event);
    }
    clear() {
        this.ntsModel = '';
        this.ntsModelChange.emit(this.ntsModel);
    }
}
