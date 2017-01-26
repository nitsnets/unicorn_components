import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

const pagesToShow = 4;

@Component({
    selector: 'nts-paginator',
    templateUrl: 'paginator.component.html',
    styleUrls: ['paginator.component.scss'],
})
export class NtsPaginatorComponent implements OnChanges {
    @Input() totalElements: number;
    @Input() pageSize: number = 10;

    @Input() selected: number = 0;
    @Output() selectedChange = new EventEmitter<number>();

    min = Math.min;
    pagesCount: number;
    pages: number[];

    ngOnChanges(changes) {
        if (changes.totalElements || changes.pageSize) {
            this.pagesCount = Math.ceil(this.totalElements / this.pageSize);
        }
        this.refreshPagesToShow();
    }
    selectPage(page: number) {
        if (page === null) { return; }
        if (page < 0) { page = 0; }
        if (page > this.pagesCount - 1) { page = this.pagesCount - 1; }
        this.selected = page;
        this.selectedChange.emit(page);
        this.refreshPagesToShow();
    }
    nextPage() {
        this.selectPage(this.selected + 1);
    }
    prevPage() {
        this.selectPage(this.selected - 1);
    }
    private refreshPagesToShow() {
        let pages = [];
        let begin = 0;
        let end = this.pagesCount - 1;
        // The window of middle pages is bounded by:
        let first = Math.max(begin, Math.min(this.pagesCount - pagesToShow, this.selected - Math.ceil((pagesToShow - 1) / 2)));
        let last = Math.min(end, first + pagesToShow - 1);

        // Add to array the first page, the null (...),
        if (first > begin + 1) {
            pages.push(begin, null);
        } else if (first > begin) {
            pages.push(begin);
        }
        // the window of middle pages,
        for (let i = first; i <= last; i++) { pages.push(i); }
        // the null (...) and the last page
        if (last < end - 1) {
            pages.push(null, end);
        } else if (last < end) {
            pages.push(end);
        }

        this.pages = pages;
    }

}
