import { UserRoleEntity } from "../entities/user-role.entity";

/** 사용자 DTO */
export class UserDto {

  /** 사용자 일련번호 */
  userSn?: number;

  /** 사용자 ID */
  userId?: string;

  /** 사용자 비밀번호 */
  userPw?: string;

  /** 사용자 생성일시 */
  regDate?: Date;

  /** 사용자 계정 활성화 여부 */
  enableYn?: string;

  /** 사용자 권한 */
  userRole?: UserRoleEntity[];

}