import { Component, OnChanges, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { sideOfScreen } from '../../utils';

@Component({
  selector: 'nts-daterange-picker',
  templateUrl: 'daterange-picker.component.html',
  styleUrls: ['daterange-picker.component.scss'],
})
export class NtsDaterangePickerComponent implements OnChanges {

  @Input() fromModel: String; // 'YYYY-MM-DD'
  @Input() fromLabel: String = 'from';
  @Output() fromChange = new EventEmitter<String>();

  @Input() toModel: String; // 'YYYY-MM-DD'
  @Input() toLabel: String = 'to';
  @Output() toChange = new EventEmitter<String>();

  mode = null;
  side = 'left';
  Math = Math;

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes) { }

  setMode(mode: 'from' | 'to', event = null) {
    this.mode = mode;
    if (mode && this.elementRef) {
      this.side = sideOfScreen(this.elementRef.nativeElement);
    }
  }

  onFromChanges(date: string) {
    this.fromModel = date;
    this.fromChange.emit(date);
  }
  onToChanges(time: string) {
    this.toModel = time;
    this.toChange.emit(time);
  }
  clear() {
    this.onFromChanges(null);
    this.onToChanges(null);
  }
}
