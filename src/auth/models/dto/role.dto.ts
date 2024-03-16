import { UserRoleDto } from './user-role.dto';

/** 권한 DTO */
export class RoleDto {

  /** 권한 ID */
  roleId?: string;

  /** 권한 명 */
  roleNm?: string;

  /** 권한 등록일시 */
  regDate?: Date;

  /** 권한 수정일시 */
  modDate?: Date;

  /** 사용자 권한 */
  userRole?: UserRoleDto[];

}
