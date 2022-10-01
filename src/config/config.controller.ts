import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { Config } from './config.entity';

@Controller('api/v1/config')
@ApiTags('블로그 환경설정 API')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  @ApiOperation({
    summary: '블로그 환경설정 정보 조회 API',
    description: '블로그 환경설정 정보를 조회한다.'
  })
  @ApiCreatedResponse({
    description: '블로그 환경설정 정보를 조회한다.',
    type: Config
  })
  getConfig(): Promise<Config> {
    return this.configService.find();
  }
  
}
