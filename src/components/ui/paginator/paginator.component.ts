import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

const pagesWindow = 4;

@Component({
    selector: 'nts-paginator',
    templateUrl: 'paginator.component.html',
    styleUrls: ['paginator.component.scss'],
})
export class NtsPaginatorComponent implements OnChanges {
    @Input() totalElements: number;
    @Input() pageSize = 10;

    @Input() selected = 0;
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
        // this.selected = page;
        this.selectedChange.emit(page);
        // this.refreshPagesToShow();
    }
    nextPage() {
        this.selectPage(this.selected + 1);
    }
    prevPage() {
        this.selectPage(this.selected - 1);
    }
    private refreshPagesToShow() {
        const pages = [];
        const begin = 0;
        const end = this.pagesCount - 1;

        // The window of middle pages is bounded by:
        const first = Math.max(
            begin, Math.min(
                this.pagesCount - pagesWindow - 2, this.selected - Math.ceil((pagesWindow - 1) / 2)
            )
        );
        const last = Math.min(end, Math.max(begin + pagesWindow + 1, first + pagesWindow - 1));

        // Add to array the first page, the null (...),
        if (first > begin) { pages.push(begin); }
        if (first > begin + 2) { pages.push(null); }
        if (first === begin + 2) { pages.push(begin + 1); }

        // the window of middle pages,
        for (let i = first; i <= last; i++) { pages.push(i); }

        // the null (...) and the last page
        if (last === end - 2) { pages.push(end - 1); }
        if (last < end - 2) { pages.push(null); }
        if (last < end) { pages.push(end); }

        this.pages = pages;
    }

}
