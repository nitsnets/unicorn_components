import { Pipe, PipeTransform } from '@angular/core';
import { objectToArray } from '../utils';

@Pipe({ name: 'objToArray' })
export class ObjToArrayPipe implements PipeTransform {
    transform(value: Object): Object[] {
        return objectToArray(value);
    }
}
