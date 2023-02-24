import { Controller, Post, Body, ValidationPipe, NotFoundException, Get, Param, ParseIntPipe, Logger, Res, UnauthorizedException } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthCredentialsDto, UserEntity, RoleEntity, RoleEnum, Tokens } from '../models';
import { AuthService } from '../services/auth.service';
import { ConfigService } from '@nestjs/config';
import { Auth, RefreshTokenUser } from 'src/shared/decorators';
import { RealIP } from 'nestjs-real-ip';
import { CacheDBService } from 'src/cache-db/services/cache-db.service';
import { createJwtRefreshTokenKey, isEmpty } from 'src/shared/utils';
import { Response } from 'express';
import { AccessTokenUser } from 'src/shared/decorators/auth/access-token-user.decorator';

@Controller('auth')
@ApiTags('인증·인가 API')
export class AuthController {

  private readonly logger = new Logger(AuthController.name);
  
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
    private readonly cacheDBService: CacheDBService,
  ) {}

  @Get('user/:userSn')
  @ApiOperation({
    summary: '사용자 조회 API',
    description: '사용자를 조회한다.',
  })
  @ApiCreatedResponse({
    type: UserEntity,
    description: '사용자',
  })
  @ApiParam({
    type: Number,
    name: 'userSn',
    description: '사용자 일련번호',
  })
  getUser(@Param('userSn', ParseIntPipe) userSn: number): Promise<UserEntity> {
    return this.authService.getUser(userSn);
  }

  @Post('user')
  @ApiOperation({
    summary: '사용자 생성 API',
    description: '사용자를 생성한다.',
  })
  @ApiBody({
    type: AuthCredentialsDto,
    description: '사용자 생성 DTO',
  })
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): void {
    if ('production' === this.config.get<string>('NODE_ENV')) {
      throw new NotFoundException();
    }
    
    this.authService.addUser(authCredentialsDto);
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
    @RealIP() ip: string,
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<Tokens> {
    this.logger.warn(`Try to login... ip : ${ip}`);

    // 액세스 토큰과 리프레시 토큰을 생성하고
    const tokens = await this.authService.signIn(authCredentialsDto);

    // 리프레시 토큰은 HttpOnly Cookie에 저장한다.
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      maxAge: +this.config.get<number>('JWT_REFRESH_EXPIRATION_TIME'),
    });
    
    return tokens;
  }

  @Post('refresh')
  @ApiOperation({
    summary: '액세스 토큰 갱신 API',
    description: '액세스 토큰을 갱신 한다.',
  })
  @ApiCreatedResponse({
    type: Object,
    description: '액세스 토큰, 리프레시 토큰',
  })
  async refreshAccessToken(
    @RealIP() ip: string,
    @RefreshTokenUser() user: UserEntity,
    @Res({ passthrough: true }) res: Response,
  ): Promise<Tokens> {
    this.logger.warn(`Try to refresh the Access token... ip : ${ip}`);

    if (!user) {
      this.logger.warn(`Refresh token not found... ip : ${ip}`);
      throw new UnauthorizedException();
    }

    // 액세스 토큰과 리프레시 토큰을 생성하고
    const tokens = await this.authService.createToken(user);

    // 리프레시 토큰은 HttpOnly Cookie에 저장한다.
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      maxAge: +this.config.get<number>('JWT_REFRESH_EXPIRATION_TIME'),
    });
    
    return tokens;
  }

  @Post('signout')
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '로그아웃 API',
    description: '로그아웃을 한다.',
  })
  async signOut(
    @AccessTokenUser() user: UserEntity,
    @Res({ passthrough: true }) res: Response
  ): Promise<void> {
    const refreshTokenKey: string = createJwtRefreshTokenKey(user);

    // Redis에 저장된 리프레시 토큰을 조회해서
    const cachedRefreshToken: string = await this.cacheDBService.get<string>(refreshTokenKey);
    
    // 없으면 쿠키의 리프레시 토큰만 삭제하고
    if (isEmpty(cachedRefreshToken)) {
      res.clearCookie('refreshToken');
      return;
    }

    // Redis에 저장된 리프레시 토큰이 있으면 삭제하고
    await this.cacheDBService.del(refreshTokenKey);

    // 쿠키의 리프레시 토큰도 삭제한다.
    res.clearCookie('refreshToken');
  }

  @Get('role')
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '권한 목록 조회 API',
    description: '권한 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Array<RoleEntity>,
    description: '권한 목록',
  })
  listRole(): Promise<RoleEntity[]> {
    return this.authService.listRole();
  }

}
