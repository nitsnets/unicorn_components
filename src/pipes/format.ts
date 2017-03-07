import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'format' })
export class FormatPipe implements PipeTransform {
    constructor( @Inject(LOCALE_ID) private _locale: string) { }
    transform(value: string, format: string = null, locale: string = null): string {

        if (!value || !format) { return value; }
        switch (format) {
            case 'percentage': return (new PercentPipe(locale || this._locale)).transform(value);
            case 'decimal': return (new DecimalPipe(locale || this._locale)).transform(value);
            case 'currency': return (new CurrencyPipe(locale || this._locale)).transform(value);
            case 'date': return (new DatePipe(locale || this._locale)).transform(value);
            default: console.warn(`Format not available: ${format}`);
        }
        return value;
    }
}
