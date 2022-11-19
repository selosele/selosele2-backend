import { IsOptional } from 'class-validator';

// 메뉴 목록 조회 DTO
export class ListMenuDto {

  // 권한 ID
  @IsOptional()
  roleId: string[];

}
