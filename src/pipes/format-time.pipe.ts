import * as moment from 'moment';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatTime' })
export class FormatTimePipe implements PipeTransform {
    transform(value: number, units: moment.DurationInputArg2): string {
        if (!value) { return ''; }
        const dur = moment.duration(value, units || 'seconds');
        return `${Math.floor(dur.asHours())}h ${dur.minutes()}min`;
    }
}
