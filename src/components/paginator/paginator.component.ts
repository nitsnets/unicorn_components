import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

const pagesToShow = 7;

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
    let pages = [0];
    let start = Math.max(1, this.selected - Math.floor(pagesToShow / 2));
    let end = Math.min(this.pagesCount - 1, this.selected + Math.floor(pagesToShow / 2));

    if (start > 1) {
      pages.push(null);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (end < this.pagesCount - 2) {
      pages.push(null, this.pagesCount - 1);
    } else if (end < this.pagesCount - 1) {
      pages.push(this.pagesCount - 1);
    }
    this.pages = pages;
  }

}
