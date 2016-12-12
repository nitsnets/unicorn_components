import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {
  transform(value: string, format: string = null): string {
    if (!value) { return value; }
    if (!format) { return moment(new Date(value)).calendar(); }
    return moment(new Date(value)).format(format);
  }
}
