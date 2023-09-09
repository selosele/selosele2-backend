import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

/** 메뉴 권한 등록/수정/삭제 DTO */
export class SaveMenuRoleDto {

  /** 메뉴 ID */
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  menuId?: number;

  /** 권한 명 */
  @IsNotEmpty()
  roleId?: string;

}
