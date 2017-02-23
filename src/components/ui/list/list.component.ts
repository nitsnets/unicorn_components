import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { objEquals } from '../../../utils';

export interface ListItem { name: String; }

@Component({
    selector: 'nts-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})
export class NtsListComponent implements OnInit {
    @Input() placeholder: string;

    @Input() itemActive: ListItem;
    @Output() itemActiveChange = new EventEmitter<ListItem>();

    @Input() items: ListItem[];
    @Output() deleteItem = new EventEmitter<number>();
    @Output() editItem = new EventEmitter<ListItem>();

    // Double click handlers
    preventDoubleclick = false;
    preventClick = false;
    timer: NodeJS.Timer;
    delay = 300;

    constructor() { }
    ngOnInit() { }

    onClickItem(item: ListItem) {
        this.preventDoubleclick = false;
        this.timer = setTimeout(
            _ => {
                if (!this.preventClick) {
                    this.itemActiveChange.emit(item);
                }
                this.preventClick = false;
            }, this.delay
        );
    }
    onDoubleclickItem(item: ListItem) {
        if (this.preventDoubleclick) { return false; }
        clearTimeout(this.timer);
        this.preventClick = true;
        this.items.map(s => s['editing'] = false);
        item['editing'] = true;
        item['newname'] = item.name;
    }
    onEditItem(item: ListItem) {
        item.name = item['newname'];
        item['editing'] = false;

        this.editItem.emit(item);
    }
    onDeleteItem(i: number, e: MouseEvent) {
        e.stopPropagation();
        this.preventDoubleclick = true;
        this.deleteItem.emit(i);
    }
    isitemSelected(item: ListItem): boolean {
        if (item['id'] && this.itemActive['id'] && item['id'] === this.itemActive['id']) { return true; }
        return objEquals(this.itemActive, item);
    }
}
