import { Component, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { NtsOption } from '../../../models/option';

@Component({
    selector: 'nts-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: ['tabs.component.scss'],
})
export class NtsTabsComponent implements OnChanges {

    @Input() size: 'small';

    @Input() tabs: NtsOption[];
    @Input() tabSelected: string | number;
    @Output() tabSelectedChange = new EventEmitter<string | number>();

    constructor(private elementRef: ElementRef) { }

    ngOnChanges(changes) {
        this.applySelected();
    }
    applySelected() {
        if (!this.tabs || !this.tabs.length) { this.selectTab(null, -1); return; }
        let tab: NtsOption = null;
        tab = this.tabs.find((t, i) => t.value && t.value === this.tabSelected || !t.value && i === this.tabSelected);
        this.selectTab(tab, this.tabs.indexOf(tab));
    }

    selectTab(tab: NtsOption, i: number) {
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
