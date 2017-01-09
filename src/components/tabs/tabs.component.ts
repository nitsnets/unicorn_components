import { Component, Output, Input, EventEmitter, ElementRef, OnChanges } from '@angular/core';
import { NtsOption } from '../../models/option';

@Component({
  selector: 'nts-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss'],
})
export class NtsTabsComponent implements OnChanges {

  @Input() tabs: NtsOption[];
  @Input() tabSelected: number;
  @Output() tabSelectedChange = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes) {
    if (changes.tabs) {
      if (this.tabs && this.tabs.length) {
        this.selectTab(this.tabs[0], 0);
      } else { this.selectTab(null, -1); }
    }
  }

  selectTab(tab: NtsOption, i: number) {
    if (this.tabSelected === i) { return; }
    this.tabSelected = i;
    this.tabSelectedChange.emit(i);
  }
}
