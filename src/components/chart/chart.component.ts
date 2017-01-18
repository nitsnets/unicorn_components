import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Color } from './../../directives/base-chart.directive';

const defaultOptions = { maintainAspectRatio: false };

@Component({
  selector: 'nts-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.scss'],
})
export class NtsChartComponent implements OnChanges {

  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() title: string;
  @Input() type: 'line' | 'bar' | 'pie' | 'radar' | 'doughnut' | 'polarArea' | 'horizontalBar';

  @Input() series: Array<{ label: string, data: [number], color: Color }> = [];
  @Input() labels: string[] = [];
  @Input() options = {};

  @Output() chartHover = new EventEmitter();
  @Output() chartClick = new EventEmitter();


  ngOnChanges(changes) {
    if (changes.type || changes.options) {
      this.options = Object.assign(this.options, defaultOptions);
    }
  }

  constructor() {

  }
}
