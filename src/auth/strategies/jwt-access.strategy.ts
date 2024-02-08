import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from '../models';
import { UserRepository } from '../repositories/user.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy) {

  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly env: ConfigService,
  ) {
    super({
      secretOrKey: env.get<string>('JWT_ACCESS_SECRET_KEY'),
      // 요청에서 JWT 추출법을 설정 -> Authorization에서 Bearer Token에 JWT를 담아 전송해야 한다.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  async validate(payload: any): Promise<UserEntity> {
    const { userSn } = payload;

    // JWT로부터 추출한 사용자 일련번호로 사용자를 조회해서
    const user: UserEntity = await this.userRepository.getUser(userSn);

    // 없으면 401 예외를 던진다.
    if (!user) {
      throw new UnauthorizedException();
    }
    
    return user;
  }

}
