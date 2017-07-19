import * as moment from 'moment';

import { Component, ElementRef, Input, HostBinding } from '@angular/core';
import { abbrDateRange, sideOfScreen } from '../../../utils';

import { Observable } from 'rxjs/Rx';
import { UniInputBaseComponent } from '../../base/input-base.component';

moment.locale('es', { week: { dow: 1, doy: 4 } });

const nameFromType = t => t === 'd' ? 'day' : t === 'w' ? 'week' : t === 'M' ? 'month' : 'year';
const range = (type: 'd' | 'w' | 'M' | 'y', side: 'from' | 'to', adj: 'prev' | 'next' = null): string => {
    let ref = moment();
    ref = adj === 'prev' ? ref.subtract(1, type) : adj === 'next' ? ref.add(1, type) : ref;
    ref = side === 'from' ? ref.startOf(<moment.unitOfTime.StartOf>nameFromType(type)) :
        side === 'to' ? ref.endOf(<moment.unitOfTime.StartOf>nameFromType(type)) : ref;
    return ref.format('YYYY-MM-DD');
};

const presets = {
    today: { from: range('d', 'from'), to: range('d', 'to'), label: 'Today' },
    week: { from: range('w', 'from'), to: range('w', 'to'), label: 'This week' },
    month: { from: range('M', 'from'), to: range('M', 'to'), label: 'This month' },
    year: { from: range('y', 'from'), to: range('y', 'to'), label: 'This year' },
    yesterday: { from: range('d', 'from', 'prev'), to: range('d', 'to', 'prev'), label: 'Yesterday' },
    l_week: { from: range('w', 'from', 'prev'), to: range('w', 'to', 'prev'), label: 'Last week' },
    l_month: { from: range('M', 'from', 'prev'), to: range('M', 'to', 'prev'), label: 'Last month' },
    l_year: { from: range('y', 'from', 'prev'), to: range('y', 'to', 'prev'), label: 'Last year' },
    tomorrow: { from: range('d', 'from', 'next'), to: range('d', 'to', 'next'), label: 'Tomorrow' },
    n_week: { from: range('w', 'from', 'next'), to: range('w', 'to', 'next'), label: 'Next week' },
    n_month: { from: range('M', 'from', 'next'), to: range('M', 'to', 'next'), label: 'Next Month' },
    n_year: { from: range('y', 'from', 'next'), to: range('y', 'to', 'next'), label: 'Next year' },
};
@Component({
    selector: 'uni-daterange-picker',
    templateUrl: 'daterange-picker.component.html',
    styleUrls: ['daterange-picker.component.scss']
})
export class UniDaterangePickerComponent extends UniInputBaseComponent {

    @HostBinding('class.uni-daterange-picker') componentClass = true;
    @Input() combo = false;
    @Input() showArrows = false;
    @Input() comboLabel = 'Date range';

    @Input() max: string;
    @Input() min: string;

    @Input() fromLabel = 'from';
    @Input() toLabel = 'to';

    clickingInside = false;
    comboOpened = false;
    comboModel = '';
    side = 'left';

    constructor(private elementRef: ElementRef) {
        super();
    }

    openCombo() {
        this.comboOpened = true;
        if (this.combo && this.elementRef) {
            this.side = sideOfScreen(this.elementRef.nativeElement);
        }
    }
    closeCombo() {
        if (!this.clickingInside) { this.comboOpened = false; }
    }

    loadPreset(name: string) {
        const preset = presets[name];
        this.onNgModelChange({
            from: preset.from,
            to: preset.to
        });
    }
    onMouseDown() {
        this.clickingInside = true;
    }
    onMouseUp() {
        setTimeout(_ => this.clickingInside = false, 100);
    }

    onNgModelChange(newModel: { from: string, to: string }): Observable<any> {
        const obs = super.onNgModelChange(newModel);
        obs.subscribe(_ => {
            this.setComboModel();
        });
        return obs;
    }
    onFromChanges(date: string) {
        const newModel = this.model || {};
        newModel['from'] = date;
        this.onNgModelChange(newModel);
    }
    onToChanges(date: string) {
        const newModel = this.model || {};
        newModel['to'] = date;
        this.onNgModelChange(newModel);
    }
    clear() {
        this.onNgModelChange({ from: null, to: null });
    }

    prevRange() {
        const { from, to } = this.getFromToMoment();
        const mgnt = this.rangeMagnitude(from, to);
        this.onNgModelChange({
            from: from.subtract(1, mgnt).format('YYYY-MM-DD'),
            to: to.subtract(1, mgnt).format('YYYY-MM-DD')
        });
    }
    nextRange() {
        const { from, to } = this.getFromToMoment();
        const mgnt = this.rangeMagnitude(from, to);
        this.onNgModelChange({
            from: from.add(1, mgnt).format('YYYY-MM-DD'),
            to: to.add(1, mgnt).format('YYYY-MM-DD')
        });
    }
    private rangeMagnitude(from, to): 'd' | 'w' | 'M' | 'y' {
        if (to.diff(from, 'months') > 0) {
            return 'y';
        } else if (to.diff(from, 'weeks') > 0) {
            return 'M';
        } else if (to.diff(from, 'days') > 0) {
            return 'w';
        } else {
            return 'd';
        };

    }
    private getFromToMoment(): { from: moment.Moment, to: moment.Moment } {
        return {
            from: moment(this.model['from'], 'YYYY-MM-DD'),
            to: moment(this.model['to'], 'YYYY-MM-DD')
        };
    }
    private setComboModel() {
        const presetKey = Object.keys(presets).find(key =>
            presets[key].from === this.model['from'] &&
            presets[key].to === this.model['to']
        );
        if (presetKey) {
            this.comboModel = presets[presetKey].label;
        } else {
            this.comboModel = abbrDateRange(this.model['from'], this.model['to']);
        }
    }
}
