import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'formatTime' })
export class FormatTimePipe implements PipeTransform {
  transform(value: number, units: moment.DurationInputArg2): string {
    if (!value) { return ''; }
    let dur = moment.duration(value, units || 'seconds');
    return `${Math.floor(dur.asHours())}h ${dur.minutes()}min`;
  }
}
