import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nts-progress',
  templateUrl: 'progress.component.html',
  styleUrls: ['progress.component.scss'],
})
export class NtsProgressComponent {

  @Input() value = 0;
  @Input() total = 100;
  @Input() showPercentage = false;
  @Input() showCount = false;

  constructor() { }
}
