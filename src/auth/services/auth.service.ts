import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { EntityManager, InsertResult } from 'typeorm';
import { UserRoleRepository } from '../repositories/user-role.repository';
import { Builder } from 'builder-pattern';
import { JwtService } from '@nestjs/jwt';
import { BizException } from 'src/shared/exceptions/biz/biz-exception';
import { AuthCredentialsDto, AuthCredentialsRoleDto, UserEntity, RoleEntity, Roles, Tokens, UserDto } from '../models';
import { RoleRepository } from '../repositories/role.repository';
import { compareEncrypt, createJwtRefreshTokenKey, encrypt, isNotBlank, startTransaction } from 'src/shared/utils';
import { CacheDBService } from 'src/cache-db/services/cache-db.service';
import { ConfigService } from '@nestjs/config';

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
    private readonly cacheDBService: CacheDBService,
    private readonly config: ConfigService,
  ) {}

  /** 사용자를 조회한다. */
  async getUser(userKey: number | string): Promise<UserEntity> {
    return await this.userRepository.getUser(userKey);
  }
  
  /** 사용자를 생성한다. */
  async addUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { userId, userPw } = authCredentialsDto;

    // ID 중복 체크
    const foundUser: UserEntity = await this.getUser(userId);
    if (foundUser) {
      throw new BizException('중복된 사용자 ID입니다.');
    }

    // 비밀번호 암호화
    authCredentialsDto.userPw = await encrypt(userPw);

    // 트랜잭션을 시작한다.
    await startTransaction(async (em: EntityManager) => {

      // 1. 사용자를 생성한다.
      const user: UserEntity = await em.withRepository(this.userRepository).addUser(authCredentialsDto);
      const roles: string[] = [Roles.ROLE_ANONYMOUS, Roles.ROLE_ADMIN];
        
      for (const role of roles) {

        // 2. 사용자 권한을 생성한다.
        const addUserRoleDto = Builder(AuthCredentialsRoleDto)
                                .userSn(user.userSn)
                                .userId(userId)
                                .roleId(role)
                                .build();
        await em.withRepository(this.userRoleRepository).addUserRole(addUserRoleDto);
      }
    });
  }

  /** 사용자 권한을 생성한다. */
  async addUserRole(authCredentialsRoleDto: AuthCredentialsRoleDto): Promise<InsertResult> {
    return await this.userRoleRepository.addUserRole(authCredentialsRoleDto);
  }

  /** 로그인을 한다. */
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<Tokens> {
    const { userId, userPw } = authCredentialsDto;

    const user: UserEntity = await this.getUser(userId);

    if (!user) {
      throw new BizException('로그인에 실패했습니다.');
    }

    if ('N' === user.enableYn) {
      throw new BizException('비활성화된 계정입니다.');
    }

    const matchPw = await compareEncrypt(userPw, user.userPw);

    if (user && matchPw) {
      return await this.createTokens(user);
    }
    
    throw new BizException('로그인에 실패했습니다.');
  }

  /** 액세스 토큰과 리프레시 토큰을 생성한다. */
  async createTokens(user: UserDto): Promise<Tokens> {
    const payload = {
      userSn: user.userSn,
      userRole: user.userRole,
    };

    // 액세스 토큰 생성
    const accessToken: string = this.jwtService.sign(payload);

    // 리프레시 토큰 생성
    const refreshToken: string = this.jwtService.sign(payload, {
      secret: this.config.get<string>('JWT_REFRESH_SECRET_KEY'),
      expiresIn: +this.config.get<number>('JWT_REFRESH_EXPIRATION_TIME'),
    });

    // Redis에 리프레시 토큰을 저장
    await this.cacheDBService.set(createJwtRefreshTokenKey(user), refreshToken, {
      ttl: +this.config.get<number>('JWT_REFRESH_EXPIRATION_TIME'),
    });

    return { accessToken, refreshToken };
  }

  /** 권한 목록을 조회한다. */
  async listRole(): Promise<RoleEntity[]> {
    return await this.roleRepository.listRole();
  }

  /** 유효한 리프레시 토큰인지 확인한다. */
  isValidRefreshToken(refreshToken: string, cachedRefreshToken: string): boolean {
    return isNotBlank(cachedRefreshToken) && cachedRefreshToken === refreshToken;
  }

}
