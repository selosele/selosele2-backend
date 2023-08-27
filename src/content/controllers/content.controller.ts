import { Controller, Get, Body, ValidationPipe, Post, Param, Delete, ParseIntPipe, Query, UseInterceptors, UploadedFile, ParseFilePipe, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { RoleEnum } from 'src/auth/models';
import { FileUploaderRequest } from 'src/file-uploader/models/file-uploader.model';
import { Auth, IsAuthenticated } from 'src/shared/decorators';
import { FileTypeValidator, isNotFileEmpty, MaxFileSizeValidator } from 'src/shared/utils';
import { DeleteResult } from 'typeorm';
import { RemoveContentDto, ContentEntity } from '../models';
import { GetContentDto } from '../models/dto/get-content.dto';
import { ListContentDto } from '../models/dto/list-content.dto';
import { SaveContentDto } from '../models/dto/save-content.dto';
import { ContentService } from '../services/content.service';

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
    type: Array<ContentEntity>,
    description: '콘텐츠 목록',
  })
  listContent(@Query(ValidationPipe) listContentDto: ListContentDto): Promise<[ContentEntity[], number]> {
    return this.contentService.listContent(listContentDto);
  }

  @Get(':link')
  @ApiOperation({
    summary: '콘텐츠 상세 조회 API',
    description: '콘텐츠를 조회한다.'
  })
  @ApiCreatedResponse({
    type: ContentEntity,
    description: '콘텐츠',
  })
  @ApiParam({
    type: String,
    name: 'link',
    description: '콘텐츠 링크',
  })
  getContent(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('link') link: string
  ): Promise<ContentEntity> {
    const getContentDto: GetContentDto = Builder(GetContentDto)
                                         .link('/' + link)
                                         .isLogin(isAuthenticated ? 'Y' : 'N')
                                         .build();
    return this.contentService.getContent(getContentDto);
  }

  @Post()
  @Auth(RoleEnum.ROLE_ADMIN)
  @UseInterceptors(FileInterceptor('ogImgFile'))
  @ApiOperation({
    summary: '콘텐츠 등록 API',
    description: '콘텐츠를 등록한다.'
  })
  @ApiCreatedResponse({
    type: ContentEntity,
    description: '콘텐츠',
  })
  @ApiBody({
    type: SaveContentDto,
    description: '콘텐츠 등록/수정 DTO',
  })
  addContent(
    @Body(ValidationPipe) saveContentDto: SaveContentDto,
    @UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
      fileIsRequired: false,
    })) ogImgFile: FileUploaderRequest,
  ): Promise<ContentEntity> {
    if (isNotFileEmpty(ogImgFile)) {
      saveContentDto.ogImgFile = ogImgFile;
    }

    return this.contentService.saveContent(saveContentDto);
  }

  @Put()
  @Auth(RoleEnum.ROLE_ADMIN)
  @UseInterceptors(FileInterceptor('ogImgFile'))
  @ApiOperation({
    summary: '콘텐츠 수정 API',
    description: '콘텐츠를 수정한다.'
  })
  @ApiCreatedResponse({
    type: ContentEntity,
    description: '콘텐츠',
  })
  @ApiBody({
    type: SaveContentDto,
    description: '콘텐츠 등록/수정 DTO',
  })
  updatePost(
    @Body(ValidationPipe) saveContentDto: SaveContentDto,
    @UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
      fileIsRequired: false,
    })) ogImgFile: FileUploaderRequest,
  ): Promise<ContentEntity> {
    if (isNotFileEmpty(ogImgFile)) {
      saveContentDto.ogImgFile = ogImgFile;
    }

    return this.contentService.saveContent(saveContentDto);
  }

  @Delete(':id')
  @Auth(RoleEnum.ROLE_ADMIN)
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
  removeContent(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.contentService.removeContent(id);
  }

  @Post('remove')
  @Auth(RoleEnum.ROLE_ADMIN)
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
  removeContents(@Body(ValidationPipe) removeContentDto: RemoveContentDto[]): Promise<DeleteResult> {
    return this.contentService.removeContents(removeContentDto);
  }

  @Post('preview')
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '콘텐츠 미리보기 API',
    description: '미리보기 콘텐츠로 응답한다.'
  })
  @ApiCreatedResponse({
    type: ContentEntity,
    description: '미리보기 콘텐츠',
  })
  @ApiBody({
    type: SaveContentDto,
    description: '콘텐츠 등록/수정 DTO',
  })
  getPreviewContent(@Body(ValidationPipe) saveContentDto: SaveContentDto): Promise<ContentEntity> {
    return this.contentService.getPreviewContent(saveContentDto);
  }

}
