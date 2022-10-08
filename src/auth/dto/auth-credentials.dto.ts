import { IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {

  // 사용자 ID
  @IsNotEmpty()
  userId?: string;

  // 사용자 비밀번호
  @IsNotEmpty()
  userPw?: string;

}

export class AuthCredentialsRoleDto {

  // 사용자 ID
  @IsNotEmpty()
  userId?: string;

  // 권한 ID
  @IsNotEmpty()
  roleId?: string;

}
