import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, MaxLength, Min } from 'class-validator';

/** 메뉴 등록/수정/삭제 DTO */
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
  @MaxLength(50)
  name?: string;

  /** 메뉴 링크 */
  @IsNotEmpty()
  @MaxLength(255)
  link?: string;

  /** 메뉴 정렬 순서 */
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  sort?: number;

  /** 메뉴 계층 */
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  depth?: number;

  /** 메뉴 권한 */
  @IsOptional()
  role: string;

  /** 메뉴 사용 여부 */
  @IsNotEmpty()
  useYn?: string;

}
