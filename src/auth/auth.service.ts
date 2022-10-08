import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto, AuthCredentialsRoleDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { InsertResult } from 'typeorm';
import { UserRoleRepository } from './user-role.repository';
import { Builder } from 'builder-pattern';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,

    @InjectRepository(UserRoleRepository)
    private readonly userRoleRepository: UserRoleRepository,
  ) {}
  
  // 사용자를 생성한다.
  async addUser(authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    const res: InsertResult = await this.userRepository.addUser(authCredentialsDto);

    if (res.identifiers[0].userId) {
      let res: InsertResult = null;
      let roles: string[] = ['ROLE_ANONYMOUS', 'ROLE_ADMIN'];

      for (let i = 0; i < roles.length; i++) {
        const dto: AuthCredentialsRoleDto = Builder(AuthCredentialsRoleDto)
          .userId(authCredentialsDto.userId)
          .roleId(roles[i])
          .build();

        res = await this.addUserRole(dto);
      }
      return res;
    }
  }

  // 사용자 권한을 생성한다.
  async addUserRole(authCredentialsRoleDto: AuthCredentialsRoleDto): Promise<InsertResult> {
    return await this.userRoleRepository.addUserRole(authCredentialsRoleDto);
  }

}
