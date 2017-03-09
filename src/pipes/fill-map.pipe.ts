import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fillMap'
})
export class NtsFillMapPipe implements PipeTransform {

    transform(input: string[], source: { [key: string]: Object } | string = '+'): any {
        return input.map(item => source[item]);
    }
}
