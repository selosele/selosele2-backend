// 페이지네이션 DTO
export class PaginationDto {

  constructor() {
    this.skipSize = (this.page - 1) * this.pageSize;
  }

  // 페이지 번호
  page?: number;

  // 페이지당 목록 수
  pageSize?: number;

  // 건너뛸 목록 수
  skipSize?: number;

}
