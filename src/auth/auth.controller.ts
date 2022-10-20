import { 
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  ForbiddenException,
  Get,
  Param,
  ParseIntPipe
} from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { InsertResult } from 'typeorm';
import { UserInfo } from '../shared/decorator/auth/user-info.decorator';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from '../shared/guard/jwt-auth.guard';
import { RoleEnum } from './role.entity';
import { Roles } from 'src/shared/decorator/auth/roles.decorator';

@Controller('api/auth')
@ApiTags('인증·인가 API')
export class AuthController {
  constructor(
    private readonly config: ConfigService,
    private readonly authService: AuthService
    ) {}

  @Get('user/:userSn')
  @ApiOperation({
    summary: '사용자 조회 API',
    description: '사용자를 조회한다.',
  })
  @ApiCreatedResponse({
    type: User,
    description: '사용자를 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'userSn',
    description: '사용자 일련번호',
  })
  getUser(@Param('userSn', ParseIntPipe) userSn: number): Promise<User> {
    return this.authService.getUser(userSn);
  }

  @Post('signup')
  @ApiOperation({
    summary: '사용자 생성 API',
    description: '사용자를 생성한다.',
  })
  @ApiCreatedResponse({
    type: User,
    description: '사용자를 생성한다.',
  })
  @ApiBody({
    type: AuthCredentialsDto,
    description: '사용자 생성 DTO',
  })
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    if (this.config.get<string>('NODE_ENV') === 'production') {
      throw new ForbiddenException();
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

  @Post('test')
  @UseGuards(JwtAuthGuard)
  @Roles(RoleEnum.ROLE_ADMIN, RoleEnum.ROLE_TEST)
  test(@UserInfo() user: User) {
    console.log('user >>>', user.userId);
  }

}
