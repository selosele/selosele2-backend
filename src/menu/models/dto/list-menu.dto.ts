import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

/** 메뉴 목록 조회 DTO */
export class ListMenuDto {

  /** 메뉴 ID */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id?: number;

  /** 권한 ID */
  @IsOptional()
  roleIds?: string[];

  /** 메뉴 사용 여부 */
  @IsOptional()
  useYn?: string;

}
