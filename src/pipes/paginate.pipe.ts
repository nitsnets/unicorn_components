import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'paginate'
})
export class UniPaginatePipe implements PipeTransform {

    transform(input: Array<any>, page: number = 0, size: number = 10): Array<any> {
        if (page === -1) { return input; }
        return input.slice(page * size, (page + 1) * size);
    }

}
