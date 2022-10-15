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
import { RoleRepository } from './role.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,

    @InjectRepository(UserRoleRepository)
    private readonly userRoleRepository: UserRoleRepository,

    @InjectRepository(RoleRepository)
    private readonly roleRepository: RoleRepository,

    private readonly jwtService: JwtService,
  ) {}

  // 사용자를 조회한다.
  async getUser(userId: string): Promise<User> {
    return await this.userRepository.getUser(userId);
  }
  
  // 사용자를 생성한다.
  async addUser(authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    const addUserRes: InsertResult = await this.userRepository.addUser(authCredentialsDto);

    if (addUserRes.identifiers[0].userId) {
      let addUserRoleRes: InsertResult = null;
      let roles: string[] = ['ROLE_ANONYMOUS', 'ROLE_ADMIN'];

      for (let i = 0; i < roles.length; i++) {
        const dto: AuthCredentialsRoleDto = Builder(AuthCredentialsRoleDto)
          .userId(authCredentialsDto.userId)
          .roleId(roles[i])
          .build();

        addUserRoleRes = await this.addUserRole(dto);
      }
      return addUserRoleRes;
    }
  }

  // 사용자 권한을 생성한다.
  async addUserRole(authCredentialsRoleDto: AuthCredentialsRoleDto): Promise<InsertResult> {
    return await this.userRoleRepository.addUserRole(authCredentialsRoleDto);
  }

  // 로그인을 한다.
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
    const { userId, userPw } = authCredentialsDto;
    let roles = [];

    const user: User = await this.userRepository.findOne({ where: { userId: userId } });
    const userRoles: UserRole[] = await this.userRoleRepository.find({ where: { userId: userId } });

    for (let role of userRoles) {
      roles.push(role.roleId);
    }

    if (user && (await bcrypt.compare(userPw, user.userPw))) {
      // 사용자 토큰 생성
      const payload = { userId, roles };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    }
    throw new UnauthorizedException('로그인 실패');
  }

}
