import { IsOptional } from "class-validator";

export class ListRoleDto {

  /** 권한 삭제 여부 */
  @IsOptional()
  delYn?: string;

}
