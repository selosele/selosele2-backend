import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { EntityManager, InsertResult } from 'typeorm';
import { UserRoleRepository } from '../repositories/user-role.repository';
import { Builder } from 'builder-pattern';
import { JwtService } from '@nestjs/jwt';
import { BizException } from 'src/shared/exceptions/biz/biz.exception';
import { AuthCredentialsDto, AuthCredentialsRoleDto, UserEntity, RoleEntity, RoleEnum } from '../models';
import { RoleRepository } from '../repositories/role.repository';
import { compareEncrypt, encrypt, startTransaction } from 'src/shared/utils';

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

  /** 사용자를 조회한다. */
  async getUser(userKey: number | string): Promise<UserEntity> {
    return await this.userRepository.getUser(userKey);
  }
  
  /** 사용자를 생성한다. */
  async addUser(authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    const { userId, userPw } = authCredentialsDto;

    // ID 중복 체크
    const foundUser: UserEntity = await this.userRepository.findOne({ where: { userId } });
    if (foundUser) {
      throw new BizException('중복된 사용자 ID입니다.');
    }

    // 비밀번호 암호화
    authCredentialsDto.userPw = await encrypt(userPw);

    let res: InsertResult = null;

    // 트랜잭션을 시작한다.
    await startTransaction(async (em: EntityManager) => {

      // 1. 사용자를 생성한다.
      const addUserRes: InsertResult = await em.withRepository(this.userRepository).addUser(authCredentialsDto);

      if (addUserRes.identifiers[0].userId) {
        const roles: string[] = [RoleEnum.ROLE_ANONYMOUS, RoleEnum.ROLE_ADMIN];
        
        for (const role of roles) {

          // 2. 사용자 권한을 생성한다.
          const addUserRoleDto: AuthCredentialsRoleDto = Builder(AuthCredentialsRoleDto)
                                                         .userSn(addUserRes.identifiers[0].userSn)
                                                         .userId(userId)
                                                         .roleId(role)
                                                         .build();
          res = await em.withRepository(this.userRoleRepository).addUserRole(addUserRoleDto);
        }
      }
    });

    return res;
  }

  /** 사용자 권한을 생성한다. */
  async addUserRole(authCredentialsRoleDto: AuthCredentialsRoleDto): Promise<InsertResult> {
    return await this.userRoleRepository.addUserRole(authCredentialsRoleDto);
  }

  /** 로그인을 한다. */
  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
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
      // 사용자 토큰 생성
      const payload = {
        userSn: user.userSn,
        userRole: user.userRole,
      };
      
      const accessToken: string = this.jwtService.sign(payload);

      return { accessToken };
    }
    
    throw new BizException('로그인에 실패했습니다.');
  }

  /** 권한 목록을 조회한다. */
  async listRole(): Promise<RoleEntity[]> {
    return await this.roleRepository.listRole();
  }

}
