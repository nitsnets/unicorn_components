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
    let firstPage = 0;
    let lastPage = this.pagesCount - 1;
    let pages = [];
    // The window of middle pages is bounded by:
    let first = Math.max(firstPage, Math.min(this.pagesCount - pagesToShow, this.selected - Math.ceil((pagesToShow - 1) / 2)));
    let last = Math.min(lastPage, first + pagesToShow - 1);

    // Add to array the first page, the null (...),
    if (first > firstPage + 1) {
      pages.push(firstPage, null);
    } else if (first > firstPage) {
      pages.push(firstPage);
    }
    // the window of middle pages,
    for (let i = first; i <= last; i++) { pages.push(i); }
    // the null (...) and the last page
    if (last < lastPage - 1) {
      pages.push(null, lastPage);
    } else if (last < lastPage) {
      pages.push(lastPage);
    }

    this.pages = pages;
  }

}
