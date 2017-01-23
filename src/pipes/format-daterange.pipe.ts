import { Pipe, PipeTransform } from '@angular/core';
import { abbrDateRange } from '../utils';

@Pipe({ name: 'formatDaterange' })
export class FormatDaterangePipe implements PipeTransform {
  transform(from: string = null, to: string = null): string {
    return abbrDateRange(from, to);

  }
}
