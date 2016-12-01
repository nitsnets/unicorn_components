import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { objEquals } from '../../utils';

interface SimpleListItem { name: String; }

@Component({
    selector: 'nts-simple-list',
    templateUrl: 'simple-list.component.html',
    styleUrls: ['simple-list.component.scss']
})
export class SimpleListComponent implements OnInit {
    @Input() placeholder: string;

    @Input() itemActive: SimpleListItem;
    @Output() itemActiveChange = new EventEmitter<SimpleListItem>();

    @Input() items: SimpleListItem[];
    @Output() deleteItem = new EventEmitter<number>();
    @Output() editItem = new EventEmitter<SimpleListItem>();

    // Daouble click handlers
    preventDoubleclick = false;
    preventClick = false;
    timer: NodeJS.Timer;
    delay = 300;

    constructor(    ) { }
    ngOnInit() {    }

    onClickItem(item: SimpleListItem) {
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
    onDoubleclickItem(item: SimpleListItem) {
        if (this.preventDoubleclick) { return false; }
        clearTimeout(this.timer);
        this.preventClick = true;
        this.items.map(s => s['editing'] = false);
        item['editing'] = true;
        item['newname'] = item.name;
    }
    onEditItem(item: SimpleListItem) {
        item.name = item['newname'];
        item['editing'] = false;

        this.editItem.emit(item);
    }
    onDeleteItem(i: number, e: MouseEvent) {
        e.stopPropagation();
        this.preventDoubleclick = true;
        this.deleteItem.emit(i);
    }
    isitemSelected(item: SimpleListItem): boolean {
        if (item['id'] && this.itemActive['id'] && item['id'] === this.itemActive['id']) {return true; }
        return objEquals(this.itemActive, item);
    }
}
