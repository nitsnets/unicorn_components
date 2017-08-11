import { Component, EventEmitter, HostBinding, Input, OnChanges, Output } from '@angular/core';

import { UniListItem } from './list.component';
import { objEquals } from '../../../utils';

export interface UniListItem {
    name: string;
    icon: string;
}

@Component({
    selector: 'uni-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})

export class UniListComponent implements OnChanges {

    @HostBinding('class.uni-list') componentClass = true;

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

    @Input() itemSelected: UniListItem;
    @Output() itemSelectedChange = new EventEmitter<UniListItem>();

    @Input() data: UniListItem[];
    @Output() delete = new EventEmitter<{ index: number, item: UniListItem }>();
    @Output() edit = new EventEmitter<{ index: number, item: UniListItem }>();
    @Output() sort = new EventEmitter<UniListItem[]>();

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
    onClick(item: UniListItem) {
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
    onDoubleclick(item: UniListItem) {
        if (this.preventDoubleclick) { return false; }
        clearTimeout(this.timer);
        this.preventClick = true;
        this.data.map(s => s['editing'] = false);
        item['editing'] = true;
        item['newname'] = item.name;
    }
    onEdit(index: number, item: UniListItem) {
        item.name = item['newname'];
        item['editing'] = false;

        this.edit.emit({ index, item });
    }
    onDelete(index: number, item: UniListItem, e: MouseEvent) {
        if (!this.deletable) { return; }

        e.stopPropagation();
        this.preventDoubleclick = true;
        if (this.local) {
            this.data.splice(index, 1);
        }
        this.delete.emit({ index, item });
    }
    isSelected(item: UniListItem): boolean {
        if (!this.itemSelected || !this.selectable) { return false; }
        if (item['id'] && this.itemSelected['id'] && item['id'] === this.itemSelected['id']) { return true; }
        return objEquals(this.itemSelected, item);
    }
}
