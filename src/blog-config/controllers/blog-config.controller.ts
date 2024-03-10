import { Controller, Get } from '@nestjs/common';
import { BlogConfigService } from '../services/blog-config.service';
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiBody, ApiQuery, ApiParam } from '@nestjs/swagger';
import { BlogConfigEntity, BlogConfigDto, SaveBlogConfigDto, GetBlogConfigDto, UpdateBlogConfigUseYnDto } from '../models';
import { Body, Delete, Param, Post, Put, Query, UploadedFiles, UseInterceptors } from '@nestjs/common/decorators';
import { Auth } from '@/shared/decorators';
import { Roles } from '@/auth/models';
import { ParseFilePipe, ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { FileUploaderRequest } from '@/file-uploader/models';
import { FileTypeValidator, MaxFileSizeValidator, serialize } from '@/shared/utils';
import { DeleteResult } from 'typeorm';

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
  @ApiQuery({
    type: GetBlogConfigDto,
    name: 'getBlogConfigDto',
    description: '블로그 환경설정 조회 DTO',
  })
  async getBlogConfig(
    @Query(ValidationPipe) getBlogConfigDto: GetBlogConfigDto
  ): Promise<BlogConfigDto | [BlogConfigDto[], number]> {

    // useYn 값 존재 시, 1건을 조회하고
    if (getBlogConfigDto.useYn) {
      const blogConfig: BlogConfigEntity = await this.blogConfigService.getBlogConfig(getBlogConfigDto);
      
      return serialize<BlogConfigDto>(blogConfig);
    }

    // 없으면 전체 목록을 조회한다.
    const blogConfigs: [BlogConfigEntity[], number] = await this.blogConfigService.listBlogConfig();
    
    return [
      serialize<BlogConfigDto[]>(blogConfigs[0]),
      blogConfigs[1],
    ];
  }

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @UseInterceptors(AnyFilesInterceptor())
  @ApiOperation({
    summary: '블로그 환경설정 추가 API',
    description: '블로그 환경설정을 추가한다.'
  })
  @ApiCreatedResponse({
    type: BlogConfigDto,
    description: '블로그 환경설정 DTO',
  })
  @ApiBody({
    type: SaveBlogConfigDto,
    description: '블로그 환경설정 추가/수정 DTO',
  })
  async addBlogConfig(
    @Body(ValidationPipe) saveBlogConfigDto: SaveBlogConfigDto,
    @UploadedFiles(new ParseFilePipe({
      fileIsRequired: false,
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
    })) files: FileUploaderRequest[],
  ): Promise<BlogConfigDto> {
    const blogConfig: BlogConfigEntity = await this.blogConfigService.saveBlogConfig(saveBlogConfigDto, files);
    
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
    type: SaveBlogConfigDto,
    description: '블로그 환경설정 추가/수정 DTO',
  })
  async updateBlogConfig(
    @Body(ValidationPipe) saveBlogConfigDto: SaveBlogConfigDto,
    @UploadedFiles(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
    })) files: FileUploaderRequest[],
  ): Promise<BlogConfigDto> {
    const blogConfig: BlogConfigEntity = await this.blogConfigService.saveBlogConfig(saveBlogConfigDto, files);
    
    return serialize<BlogConfigDto>(blogConfig);
  }

  @Put('use')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '블로그 환경설정 사용 여부 수정 API',
    description: '블로그 환경설정 사용 여부를 수정한다.'
  })
  @ApiCreatedResponse({
    type: BlogConfigDto,
    description: '블로그 환경설정 DTO',
  })
  @ApiBody({
    type: UpdateBlogConfigUseYnDto,
    description: '블로그 환경설정 사용 여부 수정 DTO',
  })
  async updateBlogConfigUseYn(
    @Body(ValidationPipe) updateBlogConfigUseYnDto: UpdateBlogConfigUseYnDto
  ): Promise<BlogConfigDto> {
    const blogConfig: BlogConfigEntity = await this.blogConfigService.updateBlogConfigUseYn(updateBlogConfigUseYnDto);

    return serialize<BlogConfigDto>(blogConfig);
  }

  @Delete(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '블로그 환경설정 삭제 API',
    description: '블로그 환경설정을 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '블로그 환경설정 삭제 정보',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '블로그 환경설정 ID',
  })
  async removeContent(
    @Param('id', ParseIntPipe) id: number
  ): Promise<DeleteResult> {
    return await this.blogConfigService.removeBlogConfig(id);
  }
  
}
