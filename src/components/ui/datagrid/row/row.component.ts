import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

import { removeHostElement } from '../../../../utils';

/**
 *
 * @author Alvaro Yuste
 *
 * @export
 * @class NtsDatagridRowComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'nts-datagrid-row',
    templateUrl: 'row.component.html'
})
export class NtsDatagridRowComponent implements OnInit {

    @HostBinding('class.selected')
    @Input() selected = false;

    @Output() selectedChange = new EventEmitter();
    @Input() selectable = false;
    @Input() box = false;

    @Input()
    @HostBinding('class.highlight')
    highlight;

    constructor(private element: ElementRef) { }

    ngOnInit() {
        if (!this.box) {
            removeHostElement(this.element.nativeElement);
        }
    }

}
