import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, Output } from '@angular/core';

@Component({
  selector: `app-pagination`,
  templateUrl: `./pagination.component.html`,
  styleUrls: [ `./pagination.component.scss` ],
})
export class PaginationComponent implements OnChanges {

  //@Input() pageCount: number;
  @Input() itemCount: number;
  @Input() currentPage = 1;
  @Input() currentPageSize: number;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();

  public pageCount: number;
  private pages: number[];
  public suggestedPagesSizes: number[] = [ 5, 10, 20, 30 ];
  public visiblePages: number[];

  ngOnChanges(): void {
    this.pageCount = Math.ceil(this.itemCount / this.currentPageSize);

    this.pages = [];
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }

    let startPage: number;
    let endPage: number;

    if (this.currentPage < 3) {
      startPage = 1;
      endPage = 5;
    } else if (this.currentPage > this.pageCount - 3) {
      startPage = this.pageCount - 4;
      endPage = this.pageCount;
    } else {
      startPage = this.currentPage - 2;
      endPage = this.currentPage + 2;
    }

    if (startPage < 1) {
      startPage = 1;
    }

    this.visiblePages = this.pages.slice(startPage - 1, endPage);

    if (!this.suggestedPagesSizes.includes(this.currentPageSize)) {
      this.injectNonSuggestedPageSize();
    }
  }

  onPageClicked(page: number) {
    this.pageChange.emit(page);
  }

  onPageSizeUpdated(pageSize: string) {
    this.pageSizeChange.emit(parseInt(pageSize, 0));
  }

  private injectNonSuggestedPageSize() {
    this.suggestedPagesSizes = [ ...this.suggestedPagesSizes, this.currentPageSize ].sort((a, b) => a - b);
  }

}

@NgModule({
  declarations: [ PaginationComponent ],
  imports: [
    CommonModule,
  ],
  exports: [ PaginationComponent ],
})

export class PaginationModule { }
