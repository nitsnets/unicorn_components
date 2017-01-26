import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { searchString } from '../utils';
@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) { return []; }
        if (!value) { return items; }
        return items.filter(it => searchString(it[field], value));
    }
}
