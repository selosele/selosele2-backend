import { Controller, Get } from '@nestjs/common';
import { BlogConfigService } from '../services/blog-config.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { BlogConfigEntity } from '../models';

@Controller('api/blogconfig')
@ApiTags('블로그 환경설정 API')
export class BlogConfigController {
  
  constructor(
    private readonly blogConfigService: BlogConfigService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '블로그 환경설정 정보 조회 API',
    description: '블로그 환경설정 정보를 조회한다.'
  })
  @ApiCreatedResponse({
    type: BlogConfigEntity,
    description: '블로그 환경설정 정보를 조회한다.',
  })
  getBlogConfig(): Promise<BlogConfigEntity> {
    return this.blogConfigService.getBlogConfig();
  }
  
}
