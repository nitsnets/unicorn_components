import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {
  transform(value: string, format: string = null, today = false, yesterday = false): string {
    if (!value) { return value; }
    let mo = moment(new Date(value));
    if (!format) { return mo.calendar(); }
    if (today && moment().diff(mo, 'days') === 0) { return 'Today'; }
    if (yesterday && moment().diff(mo, 'days') === 1) { return 'Yesterday'; }
    return mo.format(format);
  }
}
