import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

/** 페이지네이션 DTO */
export class PaginationDto {

  /** 페이지 번호 */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  page?: number | 1;

  /** 페이지당 목록 수 */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  pageSize?: number | 10;

  /** 건너뛸 목록 수 */
  getSkipSize(): number {
    return (this.page - 1) * this.pageSize;
  }

}
