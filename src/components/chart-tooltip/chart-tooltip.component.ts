import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'nts-chart-tooltip',
  templateUrl: 'chart-tooltip.component.html',
  styleUrls: ['chart-tooltip.component.scss'],
})
export class NtsChartTooltipComponent implements OnChanges {

  @Input() tooltip;

  tooltipStyle: any = {};
  tooltipTitles = [];
  tooltipSeries = [];

  ngOnChanges(changes) {
    if (!this.tooltip || this.tooltip.opacity === 0) { this.tooltipStyle.opacity = '0'; return; }
    if (!this.tooltip.body) { return; }

    this.tooltipStyle.opacity = '1';
    this.tooltipStyle.left = this.tooltip.x + 'px';
    this.tooltipStyle.top = this.tooltip.y + 'px';

    this.tooltipTitles = this.tooltip.title || [];
    this.tooltipSeries = [];
    let lines = this.tooltip.body.map(b => b.lines);
    lines.forEach((line, i) => {
      let serie = this.tooltip.labelColors[i];
      serie.label = line;
      this.tooltipSeries.push(serie);
    });
  }

  constructor() { }

}
