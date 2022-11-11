import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto, AuthCredentialsRoleDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { InsertResult } from 'typeorm';
import { UserRoleRepository } from './user-role.repository';
import { Builder } from 'builder-pattern';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
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

  // 사용자를 조회한다.
  async getUser(userKey: number | string): Promise<User> {
    return await this.userRepository.getUser(userKey);
  }
  
  // 사용자를 생성한다.
  async addUser(authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    const { userId, userPw } = authCredentialsDto;

    // ID 중복 체크
    const foundUser: User = await this.userRepository.findOne({ where: { userId } });
    if (foundUser) {
      throw new ConflictException('중복된 사용자 ID입니다.');
    }

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt();
    authCredentialsDto.userPw = await bcrypt.hash(userPw, salt);

    // 사용자 생성
    const addUserRes: InsertResult = await this.userRepository.addUser(authCredentialsDto);

    // 사용자 권한 생성
    if (addUserRes.identifiers[0].userId) {
      let addUserRoleRes: InsertResult = null;
      const roles: string[] = ['ROLE_ANONYMOUS', 'ROLE_ADMIN'];

      for (const role of roles) {
        const dto: AuthCredentialsRoleDto = Builder(AuthCredentialsRoleDto)
          .userSn(addUserRes.identifiers[0].userSn)
          .userId(userId)
          .roleId(role)
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

    const user: User = await this.getUser(userId);

    if (user && (await bcrypt.compare(userPw, user.userPw))) {
      // 사용자 토큰 생성
      const payload = {
        userSn: user.userSn,
        userRole: user.userRole,
      };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    }
    throw new UnauthorizedException('로그인에 실패했습니다.');
  }

}
