import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
    transform(value: string, h: string): string {
        if (!h) { return value; }
        return value.replace(new RegExp(h, 'gi'), '<mark>$&</mark>');
    }
}
