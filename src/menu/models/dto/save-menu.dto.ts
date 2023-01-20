import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

/** 메뉴 추가/수정/삭제 DTO */
export class SaveMenuDto {

  /** 메뉴 ID */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  id?: number;

  /** 상위 메뉴 ID */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  parentId?: number;

  /** 메뉴 명 */
  @IsNotEmpty()
  name?: string;

  /** 메뉴 링크 */
  @IsNotEmpty()
  link?: string;

  /** 메뉴 정렬 순서 */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  sort?: number;

  /** 메뉴 계층 */
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  depth?: number;

  /** 메뉴 권한 */
  @IsNotEmpty()
  role: string;

  /** 메뉴 사용 여부 */
  @IsNotEmpty()
  useYn?: string;

}
