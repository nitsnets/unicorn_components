import { Component, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { UniOption } from '../../../models/option';

@Component({
    selector: 'uni-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: ['tabs.component.scss'],
})
export class UniTabsComponent implements OnChanges {

    @Input() size: 'small';

    @Input() tabs: UniOption[];
    @Input() tabSelected: string | number;
    @Output() tabSelectedChange = new EventEmitter<string | number>();

    constructor(private elementRef: ElementRef) { }

    ngOnChanges(changes) {
        this.applySelected();
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
