import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'uni-search-header',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
})
export class UniSearchHeaderComponent extends UniInputBaseComponent {
    @Input() placeholder = '';

    constructor() { super(); }


    clear() {
        this.onNgModelChange('');
    }
}
