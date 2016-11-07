import { Pipe, PipeTransform } from '@angular/core';

import { GoOption } from '../models/option';
import { searchString } from '../utils';

@Pipe({
    name: 'filterOptions'
})
export class FilterOptionsPipe implements PipeTransform {
    transform(options: GoOption[], search: string): GoOption[] {
        if (!options) { return []; }
        return options.filter(
            comp => searchString(comp.label, search)
        );
    }
}
