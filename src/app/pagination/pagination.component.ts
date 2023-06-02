import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() pageChanged = new EventEmitter<number>();
  currentPage: number = 1;

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.pageChanged.emit(pageNumber);
  }

  nextPage() {
    this.setPage(this.currentPage + 1);
  }

  previousPage() {
    this.setPage(this.currentPage - 1);
  }
}
