import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Color } from './../../directives/base-chart.directive';

@Component({
  selector: 'nts-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.scss'],
})
export class NtsChartComponent implements OnChanges {

  @Input() type: 'line' | 'bar' | 'pie' | 'radar' | 'doughnut' | 'polarArea' | 'horizontalBar';

  @Input() series: [{ label: string, data: [number], color: Color }];
  @Input() labels: [string];
  @Input() options;

  @Output() chartHover = new EventEmitter();
  @Output() chartClick = new EventEmitter();

  ngOnChanges(changes) {
    if (changes.type || this.series || this.labels) {
      switch (this.type) {
        case 'line': case 'bar': case 'polarArea': case 'horizontalBar':
          this.initLinearChart(); break;
        case 'pie': case 'radar': case 'doughnut':
          this.initRadialChart(); break;
      }
    }
  }

  constructor() {

  }
  private initRadialChart() { }
  private initLinearChart() {

  }
}
