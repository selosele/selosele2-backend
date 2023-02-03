import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

/** 인증·인가 DTO */
export class AuthCredentialsDto {

  /** 사용자 ID */
  @IsNotEmpty()
  @MaxLength(10)
  userId?: string;

  /** 사용자 비밀번호 */
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(15)
  userPw?: string;

}

/** 사용자 권한 DTO */
export class AuthCredentialsRoleDto {

  /** 사용자 일련번호 */
  @IsNotEmpty()
  userSn?: number;

  /** 사용자 ID */
  @IsNotEmpty()
  userId?: string;

  /** 권한 ID */
  @IsNotEmpty()
  roleId?: string;

}
