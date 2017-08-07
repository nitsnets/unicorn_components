import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

import { UniInputBaseComponent } from '../../base/input-base.component';

@Component({
    selector: 'uni-search-header',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
})
export class UniSearchHeaderComponent extends UniInputBaseComponent {

    @HostBinding('class.uni-search-header') componentClass = true;
    @Input() placeholder = '';

    constructor() { super(); }


    clear() {
        this.onNgModelChange('');
    }
}
