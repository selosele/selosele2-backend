import { Controller, Post, Body } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { InsertResult } from 'typeorm';

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
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<InsertResult> {
    return this.authService.addUser(authCredentialsDto);
  }

}
