import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { generateColors, arrToRgba } from './../../directives/base-chart.directive';

@Component({
    selector: 'nts-chart-legend',
    templateUrl: 'chart-legend.component.html',
    styleUrls: ['chart-legend.component.scss'],
})
export class NtsChartLegendComponent implements OnChanges {

    @Input() editable = true;

    @Input() series: Array<any> = [];
    @Input() colors: Array<number[]> = [];

    @Output() serieToggle = new EventEmitter<boolean>();

    defaultColors = [];
    arrToRgba = arrToRgba;

    ngOnChanges(changes) {
        if (this.series && (!this.colors || this.colors.length !== this.series.length)) {
            this.colors = generateColors(this.series.length);
        }
    }

    constructor() { }

    toggleItem(index: number) {
        if (!this.editable) { return; }
        this.series[index].inactive = this.series[index].inactive ? false : true;
    }
}
