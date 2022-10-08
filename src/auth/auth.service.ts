import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto, AuthCredentialsRoleDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { InsertResult } from 'typeorm';
import { UserRoleRepository } from './user-role.repository';
import { Builder } from 'builder-pattern';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRole } from './user-role.entity';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,

    @InjectRepository(UserRoleRepository)
    private readonly userRoleRepository: UserRoleRepository,

    private readonly jwtService: JwtService,
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

  // 로그인을 한다.
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
    const { userId, userPw } = authCredentialsDto;
    let roleId = [];

    const user: User = await this.userRepository.findOne({ where: { userId: userId } });
    const userRoles: UserRole[] = await this.userRoleRepository.find({ where: { userId: userId } });

    for (let role of userRoles) {
      roleId.push(role.roleId);
    }

    if (user && (await bcrypt.compare(userPw, user.userPw))) {
      // 사용자 토큰 생성
      const payload = { userId, roleId };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    }
    throw new UnauthorizedException('로그인 실패');
  }

}
