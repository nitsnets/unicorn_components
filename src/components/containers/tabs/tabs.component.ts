import { AfterContentInit, Component, ContentChildren, ElementRef, EventEmitter, Input, OnChanges, Output, QueryList } from '@angular/core';

import { UniOption } from '../../../models/option';
import { UniTabsItemComponent } from './item/item.component';

@Component({
    selector: 'uni-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: ['tabs.component.scss'],
})
export class UniTabsComponent implements OnChanges, AfterContentInit {

    @Input() size: 'small';

    @Input() tabs: UniOption[];
    @Input() tabSelected: string | number;
    @Output() tabSelectedChange = new EventEmitter<string | number>();

    @ContentChildren(UniTabsItemComponent) tabsElements: QueryList<UniTabsItemComponent>;

    constructor(private elementRef: ElementRef) { }

    ngOnChanges(changes) {
        this.applySelected();
    }
    ngAfterContentInit() {
        if (this.tabsElements.length) {
            this.tabs = this.tabsElements.map(t => new UniOption({ label: t.label, value: t.value }));
        }
    }
    applySelected() {
        if (!this.tabs || !this.tabs.length) { this.selectTab(null, -1); return; }
        let tab: UniOption = null;
        tab = this.tabs.find((t, i) => t.value && t.value === this.tabSelected || !t.value && i === this.tabSelected);
        this.selectTab(tab, this.tabs.indexOf(tab));
    }

    selectTab(tab: UniOption, i: number) {
        if (tab && tab.value) {
            if (this.tabSelected === tab.value) { return; }
            this.tabSelected = tab.value;
            this.tabSelectedChange.emit(tab.value);
        } else {
            if (this.tabSelected === i) { return; }
            this.tabSelected = i;
            this.tabSelectedChange.emit(i);
        }
    }
}
