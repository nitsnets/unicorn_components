import { Component, OnChanges, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { sideOfScreen, abbrDateRange } from '../../utils';
import * as moment from 'moment';

moment.locale('es', { week: { dow: 1, doy: 4 } });

const nameFromType = t => t === 'd' ? 'day' : t === 'w' ? 'week' : t === 'M' ? 'month' : 'year';
const range = (type: 'd' | 'w' | 'M' | 'y', side: 'from' | 'to', adj: 'prev' | 'next' = null): string => {
  let ref = moment();
  ref = adj === 'prev' ? ref.subtract(1, type) : adj === 'next' ? ref.add(1, type) : ref;
  ref = side === 'from' ? ref.startOf(<moment.unitOfTime.StartOf>nameFromType(type)) :
    side === 'to' ? ref.endOf(<moment.unitOfTime.StartOf>nameFromType(type)) : ref;
  return ref.format('YYYY-MM-DD');
}

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
  selector: 'nts-daterange-picker',
  templateUrl: 'daterange-picker.component.html',
  styleUrls: ['daterange-picker.component.scss'],
})
export class NtsDaterangePickerComponent implements OnChanges {

  @Input() combo = false;
  @Input() showArrows = false;
  @Input() comboLabel: string = 'Date range';

  @Input() fromModel: string; // 'YYYY-MM-DD'
  @Input() fromLabel: string = 'from';
  @Output() fromChange = new EventEmitter<string>();

  @Input() toModel: string; // 'YYYY-MM-DD'
  @Input() toLabel: string = 'to';
  @Output() toChange = new EventEmitter<String>();

  clickingInside = false;
  comboOpened = false;
  comboModel = '';
  side = 'left';

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes) { }

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
    let preset = presets[name];
    this.comboModel = preset.label;
    this.onFromChanges(preset.from);
    this.onToChanges(preset.to);
  }
  onMouseDown() {
    this.clickingInside = true;
  }
  onMouseUp() {
    setTimeout(_ => this.clickingInside = false, 100);
  }

  onFromChanges(date: string) {
    this.fromModel = date;
    this.fromChange.emit(date);
    this.setComboModel();
  }
  onToChanges(time: string) {
    this.toModel = time;
    this.toChange.emit(time);
    this.setComboModel();
  }
  clear() {
    this.onFromChanges(null);
    this.onToChanges(null);
  }

  prevRange() {
    let {from, to} = this.getFromToMoment();
    let mgnt = this.rangeMagnitude(from, to);
    this.onFromChanges(from.subtract(1, mgnt).format('YYYY-MM-DD'));
    this.onToChanges(to.subtract(1, mgnt).format('YYYY-MM-DD'));
  }
  nextRange() {
    let {from, to} = this.getFromToMoment();
    let mgnt = this.rangeMagnitude(from, to);
    this.onFromChanges(from.add(1, mgnt).format('YYYY-MM-DD'));
    this.onToChanges(to.add(1, mgnt).format('YYYY-MM-DD'));
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
      from: moment(this.fromModel, 'YYYY-MM-DD'),
      to: moment(this.toModel, 'YYYY-MM-DD')
    };
  }
  private setComboModel() {
    let presetKey = Object.keys(presets).find(key =>
      presets[key].from === this.fromModel &&
      presets[key].to === this.toModel
    );
    if (presetKey) {
      this.comboModel = presets[presetKey].label;
    } else {
      this.comboModel = abbrDateRange(this.fromModel, this.toModel);
    }
  }
}
