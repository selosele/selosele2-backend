import { RoleEntity } from '../entities/role.entity';
import { UserDto } from './user.dto';

/** 사용자 권한 DTO */
export class UserRoleDto {

  /** 사용자 일련번호 */
  userSn?: number;

  /** 사용자 ID */
  userId?: string;
  
  /** 권한 ID */
  roleId?: string;

  /** 사용자 */
  user?: UserDto;

  /** 권한 */
  role?: RoleEntity;

}