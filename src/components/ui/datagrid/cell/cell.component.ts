import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'nts-datagrid-cell',
    templateUrl: 'cell.component.html'
})
export class NtsDatagridCellComponent {
    @HostBinding('style.flex-grow') _width = 1;
    @Input() set width(value) {
        if (value === 0) { }
        this._width = value;
    };
}
