import { Controller, Get } from '@nestjs/common';
import { BlogConfigService } from '../services/blog-config.service';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiBody } from '@nestjs/swagger';
import { BlogConfigEntity, UpdateBlogConfigDto } from '../models';
import { Body, Put, UploadedFiles, UseInterceptors } from '@nestjs/common/decorators';
import { Auth } from 'src/shared/decorators';
import { RoleEnum } from 'src/auth/models';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { FileUploaderRequest } from 'src/file-uploader/models/file-uploader.model';

@Controller('api/blogconfig')
@ApiTags('블로그 환경설정 API')
export class BlogConfigController {
  
  constructor(
    private readonly blogConfigService: BlogConfigService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '블로그 환경설정 조회 API',
    description: '블로그 환경설정을 조회한다.'
  })
  @ApiCreatedResponse({
    type: BlogConfigEntity,
    description: '블로그 환경설정을 조회한다.',
  })
  getBlogConfig(): Promise<BlogConfigEntity> {
    return this.blogConfigService.getBlogConfig();
  }

  @Put()
  @Auth(RoleEnum.ROLE_ADMIN)
  @UseInterceptors(AnyFilesInterceptor())
  @ApiOperation({
    summary: '블로그 환경설정 수정 API',
    description: '블로그 환경설정을 수정한다.'
  })
  @ApiCreatedResponse({
    type: BlogConfigEntity,
    description: '블로그 환경설정을 수정한다.',
  })
  @ApiBody({
    type: UpdateBlogConfigDto,
    description: '블로그 환경설정 수정 DTO',
  })
  updateBlogConfig(
    @Body(ValidationPipe) updateBlogConfigDto: UpdateBlogConfigDto,
    @UploadedFiles() files: FileUploaderRequest[],
  ): Promise<BlogConfigEntity> {
    updateBlogConfigDto.files = files;
    
    return this.blogConfigService.updateBlogConfig(updateBlogConfigDto);
  }
  
}
