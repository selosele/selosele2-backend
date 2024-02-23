import { isNotBlank } from '@/shared/utils';
import { globalCodes } from '@/shared/codes/code';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsEmpty, IsOptional } from 'class-validator';

/** 포스트 목록 조회 DTO */
export class ListPostDto {

  /** 포스트 ID */
  @IsOptional()
  id?: number;

  /** 임시저장 여부 */
  @IsOptional()
  tmpYn?: string;

  /** 카테고리 ID */
  @IsOptional()
  categoryId?: number;

  /** 태그 ID */
  @IsOptional()
  tagId?: number;

  /** 개수 */
  @IsOptional()
  limit?: number;

  /** 연도 */
  @IsOptional()
  year?: string;

  /** 페이지 유형 */
  @Transform(({ value }: TransformFnParams) => isNotBlank(value) ? value : globalCodes.PAGE_MAIN.id)
  @IsOptional()
  pageType?: string;

  /** 로그인 여부 */
  @IsEmpty()
  isLogin?: string;

}
