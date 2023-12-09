import { Controller, Get } from '@nestjs/common';
import { BlogConfigService } from '../services/blog-config.service';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiBody } from '@nestjs/swagger';
import { BlogConfigEntity, BlogConfigDto, UpdateBlogConfigDto } from '../models';
import { Body, Put, UploadedFiles, UseInterceptors } from '@nestjs/common/decorators';
import { Auth } from '@/shared/decorators';
import { Roles } from '@/auth/models';
import { ParseFilePipe, ValidationPipe } from '@nestjs/common/pipes';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { FileUploaderRequest } from '@/file-uploader/models/file-uploader.model';
import { FileTypeValidator, MaxFileSizeValidator, serialize } from '@/shared/utils';

@Controller('blogconfig')
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
    type: BlogConfigDto,
    description: '블로그 환경설정 DTO',
  })
  async getBlogConfig(): Promise<BlogConfigDto> {
    const blogConfig: BlogConfigEntity = await this.blogConfigService.getBlogConfig();
    
    return serialize<BlogConfigDto>(blogConfig);
  }

  @Put()
  @Auth(Roles.ROLE_ADMIN)
  @UseInterceptors(AnyFilesInterceptor())
  @ApiOperation({
    summary: '블로그 환경설정 수정 API',
    description: '블로그 환경설정을 수정한다.'
  })
  @ApiCreatedResponse({
    type: BlogConfigDto,
    description: '블로그 환경설정 DTO',
  })
  @ApiBody({
    type: UpdateBlogConfigDto,
    description: '블로그 환경설정 수정 DTO',
  })
  async updateBlogConfig(
    @Body(ValidationPipe) updateBlogConfigDto: UpdateBlogConfigDto,
    @UploadedFiles(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
    })) files: FileUploaderRequest[],
  ): Promise<BlogConfigDto> {
    updateBlogConfigDto.files = files;

    const blogConfig: BlogConfigEntity = await this.blogConfigService.updateBlogConfig(updateBlogConfigDto);
    
    return serialize<BlogConfigDto>(blogConfig);
  }
  
}
