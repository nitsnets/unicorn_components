import { Component, ElementRef, EventEmitter, HostBinding, Input, OnChanges, Output } from '@angular/core';

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
export class NtsDatagridRowComponent implements OnChanges {

    @HostBinding('class.selected')
    @Input() selected = false;

    @HostBinding('class.box')
    @Input() box = false;

    @HostBinding('class.any-selected')
    @Input() anySelected = false;

    @HostBinding('class.deleting-selection')
    @Input() deletingSelection = false;

    @Input() selectable = false;
    @Output() selectedChange = new EventEmitter();

    @Input() deletable = false;
    @Output() delete = new EventEmitter();

    @Input()
    @HostBinding('class.highlight')
    highlight;

    @HostBinding('class.deleting')
    deleting = false;

    constructor(private element: ElementRef) { }

    ngOnChanges(changes) {
        if (changes.anySelected && this.anySelected) {
            this.deleting = false;
        }
    }

}
