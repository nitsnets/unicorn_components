import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'formatTime' })
export class FormatTimePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) { return value; }
    let dur = moment.duration(value);
    return `${dur.hours()}h ${dur.minutes()}min`;
  }
}
