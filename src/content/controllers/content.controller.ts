import { Controller, Get, Body, ValidationPipe, Post, Param, Delete, ParseIntPipe, Query, UseInterceptors, UploadedFile, ParseFilePipe, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { Roles } from '@/auth/models';
import { Auth, IsAuthenticated } from '@/shared/decorators';
import { FileTypeValidator, isNotFileEmpty, MaxFileSizeValidator, serialize } from '@/shared/utils';
import { DeleteResult } from 'typeorm';
import { RemoveContentDto, ContentEntity, GetContentDto, ContentDto, SaveContentDto, ListContentDto } from '../models';
import { ContentService } from '../services/content.service';
import { Express } from 'express';
import { Multer } from 'multer';

@Controller('content')
@ApiTags('콘텐츠 API')
export class ContentController {

  constructor(
    private readonly contentService: ContentService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '콘텐츠 목록 조회 API',
    description: '콘텐츠 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<ContentDto>,
    description: '콘텐츠 DTO 목록',
  })
  @ApiQuery({
    type: ListContentDto,
    name: 'listContentDto',
    description: '콘텐츠 목록 조회 DTO',
  })
  async listContent(
    @Query(ValidationPipe) listContentDto: ListContentDto
  ): Promise<[ContentDto[], number]> {
    const contents: [ContentEntity[], number] = await this.contentService.listContent(listContentDto);

    return [
      serialize<ContentDto[]>(contents[0]),
      contents[1],
    ];
  }

  @Get(':link')
  @ApiOperation({
    summary: '콘텐츠 상세 조회 API',
    description: '콘텐츠를 조회한다.'
  })
  @ApiCreatedResponse({
    type: ContentDto,
    description: '콘텐츠 DTO',
  })
  @ApiParam({
    type: String,
    name: 'link',
    description: '콘텐츠 링크',
  })
  async getContent(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('link') link: string
  ): Promise<ContentDto> {
    const getContentDto = Builder(GetContentDto)
                          .link(`/${link}`)
                          .isLogin(isAuthenticated ? 'Y' : 'N')
                          .build();

    const content: ContentEntity = await this.contentService.getContent(getContentDto);

    return serialize<ContentDto>(content);
  }

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @UseInterceptors(FileInterceptor('ogImgFile'))
  @ApiOperation({
    summary: '콘텐츠 등록 API',
    description: '콘텐츠를 등록한다.'
  })
  @ApiCreatedResponse({
    type: ContentDto,
    description: '콘텐츠 DTO',
  })
  @ApiBody({
    type: SaveContentDto,
    description: '콘텐츠 등록/수정 DTO',
  })
  async addContent(
    @Body(ValidationPipe) saveContentDto: SaveContentDto,
    @UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
      fileIsRequired: false,
    })) ogImgFile: Express.Multer.File,
  ): Promise<ContentDto> {
    if (isNotFileEmpty(ogImgFile)) {
      saveContentDto.ogImgFile = ogImgFile;
    }

    const content: ContentEntity = await this.contentService.saveContent(saveContentDto);

    return serialize<ContentDto>(content);
  }

  @Put()
  @Auth(Roles.ROLE_ADMIN)
  @UseInterceptors(FileInterceptor('ogImgFile'))
  @ApiOperation({
    summary: '콘텐츠 수정 API',
    description: '콘텐츠를 수정한다.'
  })
  @ApiCreatedResponse({
    type: ContentDto,
    description: '콘텐츠 DTO',
  })
  @ApiBody({
    type: SaveContentDto,
    description: '콘텐츠 등록/수정 DTO',
  })
  async updatePost(
    @Body(ValidationPipe) saveContentDto: SaveContentDto,
    @UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
      fileIsRequired: false,
    })) ogImgFile: Express.Multer.File,
  ): Promise<ContentDto> {
    if (isNotFileEmpty(ogImgFile)) {
      saveContentDto.ogImgFile = ogImgFile;
    }

    const content: ContentEntity = await this.contentService.saveContent(saveContentDto);

    return serialize<ContentDto>(content);
  }

  @Delete(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '콘텐츠 삭제 API',
    description: '콘텐츠를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '콘텐츠 삭제 정보',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '콘텐츠 ID',
  })
  async removeContent(
    @Param('id', ParseIntPipe) id: number
  ): Promise<DeleteResult> {
    return await this.contentService.removeContent(id);
  }

  @Post('remove')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '콘텐츠 다건 삭제 API',
    description: '콘텐츠 다건을 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '콘텐츠 다건 삭제 정보',
  })
  @ApiBody({
    type: RemoveContentDto,
    description: '콘텐츠 삭제 DTO',
  })
  async removeContents(
    @Body(ValidationPipe) removeContentDto: RemoveContentDto[]
  ): Promise<DeleteResult> {
    return await this.contentService.removeContents(removeContentDto);
  }

  @Post('preview')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '콘텐츠 미리보기 API',
    description: '미리보기 콘텐츠로 응답한다.'
  })
  @ApiCreatedResponse({
    type: ContentDto,
    description: '콘텐츠 DTO',
  })
  @ApiBody({
    type: SaveContentDto,
    description: '콘텐츠 등록/수정 DTO',
  })
  async getPreviewContent(
    @Body(ValidationPipe) saveContentDto: SaveContentDto
  ): Promise<ContentDto> {
    const content: ContentEntity = await this.contentService.getPreviewContent(saveContentDto);

    return serialize<ContentDto>(content);
  }

}
