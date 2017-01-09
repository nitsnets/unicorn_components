import { Component, Output, Input, EventEmitter, ElementRef, OnChanges } from '@angular/core';
import { NtsOption } from '../../models/option';

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
    if (changes.tabs) {
      if (this.tabs && this.tabs.length) {
        this.selectTab(this.tabs[0], 0);
      } else { this.selectTab(null, -1); }
    }
  }

  selectTab(tab: NtsOption, i: number) {
    if (tab.value) {
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
