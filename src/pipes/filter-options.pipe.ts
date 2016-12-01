import { Pipe, PipeTransform } from '@angular/core';

import { NtsOption } from '../models/option';
import { searchString } from '../utils';

@Pipe({
    name: 'filterOptions'
})
export class FilterOptionsPipe implements PipeTransform {
    transform(options: NtsOption[], search: string): NtsOption[] {
        if (!options) { return []; }
        return options.filter(
            comp => searchString(comp.label, search)
        );
    }
}
