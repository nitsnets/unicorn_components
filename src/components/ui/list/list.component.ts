import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { ListItem } from './list.component';
import { objEquals } from '../../../utils';

export interface ListItem { name: String; }

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

    @Input() itemActive: ListItem;
    @Output() itemActiveChange = new EventEmitter<ListItem>();

    @Input() data: ListItem[];
    @Output() delete = new EventEmitter<{ index: number, item: ListItem }>();
    @Output() edit = new EventEmitter<{ index: number, item: ListItem }>();

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
        console.log('sort', event, this.data.map(i => i.name));
    }
    onClick(item: ListItem) {
        this.preventDoubleclick = false;
        if (!this.selectable) { return; }
        if (this.local) {
            this.itemActive = item;
        }
        this.timer = setTimeout(
            _ => {
                if (!this.preventClick) {
                    this.itemActiveChange.emit(item);
                }
                this.preventClick = false;
            }, this.delay
        );
    }
    onDoubleclick(item: ListItem) {
        console.log('dblclick');

        if (this.preventDoubleclick) { return false; }
        clearTimeout(this.timer);
        this.preventClick = true;
        this.data.map(s => s['editing'] = false);
        item['editing'] = true;
        item['newname'] = item.name;
    }
    onEdit(index: number, item: ListItem) {
        item.name = item['newname'];
        item['editing'] = false;

        this.edit.emit({ index, item });
    }
    onDelete(index: number, item: ListItem, e: MouseEvent) {
        if (!this.deletable) { return; }

        e.stopPropagation();
        this.preventDoubleclick = true;
        if (this.local) {
            this.data.splice(index, 1);
        }
        this.delete.emit({ index, item });
    }
    isSelected(item: ListItem): boolean {
        if (!this.itemActive) { return false; }
        if (item['id'] && this.itemActive['id'] && item['id'] === this.itemActive['id']) { return true; }
        return objEquals(this.itemActive, item);
    }
}
