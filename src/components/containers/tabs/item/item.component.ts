import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output } from '@angular/core';

import { UniOption } from '../../../../models/option';

@Component({
    selector: 'uni-tabs-item',
    template: '',
})
export class UniTabsItemComponent {

    @Input() size: 'small';

    @Input()
    @HostBinding('class.selected')
    selected = false;

    @Input() label: string;
    @Input() value: any;

    @Output() select = new EventEmitter<void>();

    @HostBinding('class.small') get isSmall(): boolean { return this.size === 'small'; }
    @HostBinding('innerHtml') get tabLabel(): string { return this.label; }
    @HostListener('click') onClick() { this.select.emit(this.value); }

    constructor() { }

}
