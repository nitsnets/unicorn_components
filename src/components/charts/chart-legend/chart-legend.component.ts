import { Component, EventEmitter, Input, OnChanges, Output, HostBinding } from '@angular/core';
import { arrToRgba, generateColors } from './../../../directives/base-chart.directive';

@Component({
    selector: 'uni-chart-legend',
    templateUrl: 'chart-legend.component.html',
    styleUrls: ['chart-legend.component.scss'],
})
export class UniChartLegendComponent implements OnChanges {

    @HostBinding('class.uni-chart-legend') componentClass = true;
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
