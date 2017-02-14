import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'nts-search-header',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
})
export class NtsSearchHeaderComponent implements OnInit {
    @Input() ntsModel;
    @Output() ntsModelChange = new EventEmitter();
    @Input() placeholder: string = '';
    @Input() value: string = '';
    @Input() debounce: number = 0;

    constructor() { }

    ngOnInit() { }
    onNtsModelChange(event) {
        this.ntsModel = event;
        this.ntsModelChange.emit(event);
    }
    clear() {
        this.ntsModel = '';
        this.ntsModelChange.emit(this.ntsModel);
    }
}
