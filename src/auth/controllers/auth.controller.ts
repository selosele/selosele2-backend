import { Controller, Post, Body, ValidationPipe, NotFoundException, Get, Logger, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AccessTokenUser, Auth, Ip, RefreshTokenUser } from '@/shared/decorators';
import { Response } from 'express';
import { AuthService } from '../services/auth.service';
import { CacheDBService } from '@/cache-db/services/cache-db.service';
import { AuthCredentialsDto, RoleDto, RoleEntity, Roles, Tokens, UserDto, UserEntity } from '../models';
import { createJwtRefreshTokenKey, getIpInfo, isBlackIp, isBlank, isProd, serialize } from '@/shared/utils';
import { JwtRefreshGuard } from '@/shared/guards';

@Controller('auth')
@ApiTags('인증·인가 API')
export class AuthController {

  private readonly logger = new Logger(AuthController.name);
  
  constructor(
    private readonly env: ConfigService,
    private readonly authService: AuthService,
    private readonly cacheDBService: CacheDBService,
  ) {}

  @Post('user')
  @ApiOperation({
    summary: '사용자 생성 API',
    description: '사용자를 생성한다.',
  })
  @ApiBody({
    type: AuthCredentialsDto,
    description: '사용자 생성 DTO',
  })
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<void> {
    // 운영 환경이거나 국가별 아이피 차단 로직에 걸리면 404 예외를 던진다.
    if (isProd(this.env.get<string>('NODE_ENV')) || isBlackIp(getIpInfo['country'])) {
      throw new NotFoundException();
    }
    await this.authService.addUser(authCredentialsDto);
  }

  @Post('signin')
  @ApiOperation({
    summary: '로그인 API',
    description: '로그인을 한다.',
  })
  @ApiCreatedResponse({
    type: Object,
    description: '액세스 토큰, 리프레시 토큰',
  })
  @ApiBody({
    type: AuthCredentialsDto,
    description: '로그인 DTO',
  })
  async signIn(
    @Ip() ip: string,
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
    @Res({ passthrough: true }) resp: Response,
  ): Promise<Tokens> {
    this.logger.warn(`Try to login... ip : ${ip}`);

    // 국가별 아이피 차단
    if (isBlackIp(getIpInfo['country'])) {
      throw new NotFoundException();
    }

    // 액세스 토큰과 리프레시 토큰을 생성하고
    const tokens: Tokens = await this.authService.signIn(authCredentialsDto);

    // 리프레시 토큰은 HttpOnly Cookie에 저장한다.
    resp.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      maxAge: +this.env.get<number>('JWT_REFRESH_EXPIRATION_TIME'),
    });
    
    return tokens;
  }

  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  @ApiOperation({
    summary: '액세스 토큰 갱신 API',
    description: '액세스 토큰을 갱신 한다.',
  })
  @ApiCreatedResponse({
    type: Object,
    description: '액세스 토큰, 리프레시 토큰',
  })
  async refreshAccessToken(
    @Ip() ip: string,
    @RefreshTokenUser() user: UserDto,
    @Res({ passthrough: true }) resp: Response,
  ): Promise<Tokens> {
    this.logger.warn(`Try to refresh the Access token... ip : ${ip}`);

    // 국가별 아이피 차단
    if (isBlackIp(getIpInfo['country'])) {
      throw new NotFoundException();
    }

    if (!user) {
      this.logger.warn(`Refresh token not found... ip : ${ip}`);
      throw new UnauthorizedException();
    }

    // 액세스 토큰과 리프레시 토큰을 생성하고
    const tokens: Tokens = await this.authService.createTokens(user);

    // 리프레시 토큰은 HttpOnly Cookie에 저장한다.
    resp.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      maxAge: +this.env.get<number>('JWT_REFRESH_EXPIRATION_TIME'),
    });
    
    return tokens;
  }

  @Post('signout')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '로그아웃 API',
    description: '로그아웃을 한다.',
  })
  async signOut(
    @AccessTokenUser() user: UserDto,
    @Res({ passthrough: true }) resp: Response
  ): Promise<void> {
    const refreshTokenKey: string = createJwtRefreshTokenKey(user, this.env.get<string>('JWT_REFRESH_SECRET_REDIS_KEY'));

    // Redis에 저장된 리프레시 토큰을 조회해서
    const cachedRefreshToken: string = await this.cacheDBService.get<string>(refreshTokenKey);
    
    // 없으면 쿠키의 리프레시 토큰만 삭제한다.
    if (isBlank(cachedRefreshToken)) {
      resp.clearCookie('refreshToken');
      return;
    }

    // 있으면 삭제하고
    await this.cacheDBService.del(refreshTokenKey);

    // 쿠키의 리프레시 토큰도 삭제한다.
    resp.clearCookie('refreshToken');
  }

  @Get('role')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '권한 목록 조회 API',
    description: '권한 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Array<RoleDto>,
    description: '권한 DTO 목록',
  })
  async listRole(): Promise<RoleDto[]> {
    const roles: RoleEntity[] = await this.authService.listRole();

    return serialize<RoleDto[]>(roles);
  }

}
