import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../user.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly config: ConfigService,
  ) {
    super({
      secretOrKey: config.get<string>('JWT_ACCESS_SECRET_KEY'),
      // 요청에서 JWT 추출법을 설정 -> Authorization에서 Bearer Token에 JWT를 담아 전송해야 한다.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  async validate(payload): Promise<UserEntity> {
    const { userSn } = payload;
    const user: UserEntity = await this.userRepository.getUser(userSn);

    if (!user) {
      throw new UnauthorizedException();
    }
    
    return user;
  }

}
