import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from '../models';
import { UserRepository } from '../repositories/user.repository';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../services/auth.service';
import { CacheDBService } from '@/cache-db/services/cache-db.service';
import { createJwtRefreshTokenKey } from '@/shared/utils';
import { Request } from 'express';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {

  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
    private readonly cacheDBService: CacheDBService,
    private readonly config: ConfigService,
  ) {
    super({
      passReqToCallback: true,
      secretOrKey: config.get<string>('JWT_REFRESH_SECRET_KEY'),
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          return request?.cookies?.refreshToken;
        }
      ]),
    })
  }

  async validate(req: Request, payload: any): Promise<UserEntity> {
    const refreshToken = req?.cookies?.refreshToken;
    const { userSn } = payload;

    // JWT로부터 추출한 사용자 일련번호로 사용자를 조회해서
    const user: UserEntity = await this.userRepository.getUser(userSn);

    // 없으면 401 예외를 던진다.
    if (!user) {
      throw new UnauthorizedException();
    }

    const refreshTokenKey: string = createJwtRefreshTokenKey(user, this.config.get<string>('JWT_REFRESH_SECRET_REDIS_KEY'));

    // Redis에 저장된 리프레시 토큰을 조회해서
    const cachedRefreshToken: string = await this.cacheDBService.get<string>(refreshTokenKey);
    
    // 쿠키의 것과 불일치하면 401 예외를 던진다.
    if (!this.authService.isValidRefreshToken(refreshToken, cachedRefreshToken)) {
      throw new UnauthorizedException();
    }

    return user;
  }

}
