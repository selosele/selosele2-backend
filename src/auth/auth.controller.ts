import { Controller, Post, Body, ValidationPipe, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { InsertResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorator/get-user.decorator';

@Controller('api/auth')
@ApiTags('인증·인가 API')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({
    summary: '사용자 생성 API',
    description: '사용자를 생성한다.'
  })
  @ApiCreatedResponse({
    description: '사용자를 생성한다.',
    type: User
  })
  signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    return this.authService.addUser(authCredentialsDto);
  }

  @Post('signin')
  @ApiOperation({
    summary: '로그인 API',
    description: '로그인을 한다.'
  })
  @ApiCreatedResponse({
    description: '로그인을 한다.',
    type: String
  })
  signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Post('test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log('user >>>', user);
  }

}
