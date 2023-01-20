import { Controller, Post, Body, ValidationPipe, NotFoundException, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthCredentialsDto, UserEntity, RoleEntity, RoleEnum } from '../models';
import { AuthService } from '../services/auth.service';
import { InsertResult } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Auth } from 'src/shared/decorators';

@Controller('auth')
@ApiTags('인증·인가 API')
export class AuthController {
  
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService,
  ) {}

  @Get('user/:userSn')
  @ApiOperation({
    summary: '사용자 조회 API',
    description: '사용자를 조회한다.',
  })
  @ApiCreatedResponse({
    type: UserEntity,
    description: '사용자를 조회한다.',
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
  @ApiCreatedResponse({
    type: InsertResult,
    description: '사용자를 생성한다.',
  })
  @ApiBody({
    type: AuthCredentialsDto,
    description: '사용자 생성 DTO',
  })
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    if ('production' === this.config.get<string>('NODE_ENV')) {
      throw new NotFoundException();
    }
    return this.authService.addUser(authCredentialsDto);
  }

  @Post('signin')
  @ApiOperation({
    summary: '로그인 API',
    description: '로그인을 한다.',
  })
  @ApiCreatedResponse({
    type: String,
    description: '로그인을 한다.',
  })
  @ApiBody({
    type: AuthCredentialsDto,
    description: '로그인 DTO',
  })
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Get('role')
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '권한 목록 조회 API',
    description: '권한 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: RoleEntity,
    description: '권한 목록을 조회한다.',
  })
  listRole(): Promise<RoleEntity[]> {
    return this.authService.listRole();
  }

}
