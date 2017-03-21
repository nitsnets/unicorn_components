import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { NtsListItem } from './list.component';
import { objEquals } from '../../../utils';

export interface NtsListItem {
    name: string;
    icon: string;
}

@Component({
    selector: 'nts-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})
export class NtsListComponent implements OnChanges {
    @Input() local = true;

    @Input() sortable: any;
    @Input() selectable = false;
    @Input() deletable = false;

    @Input() placeholder: string;
    defaultSortableOptions = {
        animation: 150,
        handle: 'inactive',
        onSort: (evt) => this.onSort(evt),
    };
    sortableOptions = this.defaultSortableOptions;

    @Input() itemSelected: NtsListItem;
    @Output() itemSelectedChange = new EventEmitter<NtsListItem>();

    @Input() data: NtsListItem[];
    @Output() delete = new EventEmitter<{ index: number, item: NtsListItem }>();
    @Output() edit = new EventEmitter<{ index: number, item: NtsListItem }>();
    @Output() sort = new EventEmitter<NtsListItem[]>();

    // Double click handlers
    preventDoubleclick = false;
    preventClick = false;
    timer: NodeJS.Timer;
    delay = 300;

    ngOnChanges(changes) {
        if (changes.sortable) {
            if (this.sortable) {
                this.sortableOptions = Object.assign(this.sortableOptions, this.sortable === true ? {} : this.sortable);
                this.sortableOptions.handle = '.drag-handle';
            } else {
                this.sortableOptions = this.defaultSortableOptions;
            }
        }
    }
    onSort(event) {
        this.sort.emit(this.data);
    }
    onClick(item: NtsListItem) {
        this.preventDoubleclick = false;
        const lastSelected = this.itemSelected;
        if (!this.selectable) { return; }
        if (this.local) {
            this.itemSelected = item;
        }
        this.timer = setTimeout(
            _ => {
                if (!this.preventClick) {
                    this.itemSelectedChange.emit(item);
                } else {
                    this.itemSelected = lastSelected;
                }
                this.preventClick = false;
            }, this.delay
        );
    }
    onDoubleclick(item: NtsListItem) {
        if (this.preventDoubleclick) { return false; }
        clearTimeout(this.timer);
        this.preventClick = true;
        this.data.map(s => s['editing'] = false);
        item['editing'] = true;
        item['newname'] = item.name;
    }
    onEdit(index: number, item: NtsListItem) {
        item.name = item['newname'];
        item['editing'] = false;

        this.edit.emit({ index, item });
    }
    onDelete(index: number, item: NtsListItem, e: MouseEvent) {
        if (!this.deletable) { return; }

        e.stopPropagation();
        this.preventDoubleclick = true;
        if (this.local) {
            this.data.splice(index, 1);
        }
        this.delete.emit({ index, item });
    }
    isSelected(item: NtsListItem): boolean {
        if (!this.itemSelected) { return false; }
        if (item['id'] && this.itemSelected['id'] && item['id'] === this.itemSelected['id']) { return true; }
        return objEquals(this.itemSelected, item);
    }
}
