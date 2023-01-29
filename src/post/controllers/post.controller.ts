import { Controller, Get, Post, Query, Param, ValidationPipe, ParseIntPipe, Delete, Body, UseInterceptors, ParseFilePipe, UploadedFile, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { RoleEnum } from 'src/auth/models';
import { FileUploaderRequest } from 'src/file-uploader/models/file-uploader.model';
import { Auth, IsAuthenticated } from 'src/shared/decorators';
import { PaginationDto } from 'src/shared/models';
import { FileTypeValidator, isNotFileEmpty, MaxFileSizeValidator } from 'src/shared/utils';
import { DeleteResult } from 'typeorm';
import { GetPostDto, ListPostDto, RemovePostDto, SearchPostDto, PostEntity } from '../models';
import { SavePostDto } from '../models/dto/save-post.dto';
import { PostService } from '../services/post.service';

@Controller('post')
@ApiTags('포스트 API')
export class PostController {
  
  constructor(
    private readonly postService: PostService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '포스트 목록 조회 API',
    description: '포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: PostEntity,
    description: '포스트 목록을 조회한다.',
  })
  @ApiQuery({
    type: ListPostDto,
    name: 'listPostDto',
    description: '포스트 목록 조회 DTO',
  })
  listPost(
    @IsAuthenticated() isAuthenticated: boolean,
    @Query(ValidationPipe) listPostDto: ListPostDto,
  ): Promise<[PostEntity[], number]> {
    // 비밀글 조회를 위한 세팅
    listPostDto.isLogin = isAuthenticated ? 'Y' : 'N';

    // 메인 포스트 목록 조회
    if ('D01001' === listPostDto.type) {
      return this.postService.listPostMain(listPostDto);
    }

    return this.postService.listPost(listPostDto);
  }

  @Get('/limit/:limit')
  @ApiOperation({
    summary: '개수별 포스트 목록 조회 API',
    description: '개수별 포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: PostEntity,
    description: '개수별 포스트 목록을 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'limit',
    description: '개수',
  })
  listPostByLimit(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('limit', ParseIntPipe) limit: number
  ): Promise<PostEntity[]> {
    const listPostDto: ListPostDto = Builder(ListPostDto)
                                    .limit(limit)
                                    .isLogin(isAuthenticated ? 'Y' : 'N')
                                    .build();
    return this.postService.listPostByLimit(listPostDto);
  }

  @Get('search')
  @ApiOperation({
    summary: '포스트 검색 API',
    description: '포스트를 검색한다.'
  })
  @ApiCreatedResponse({
    type: PostEntity,
    description: '포스트를 검색한다.',
  })
  @ApiQuery({
    type: SearchPostDto,
    name: 'searchPostDto',
    description: '포스트 검색 DTO',
  })
  @ApiQuery({
    type: PaginationDto,
    name: 'paginationDto',
    description: '페이지네이션 DTO',
  })
  listPostSearch(
    @IsAuthenticated() isAuthenticated: boolean,
    @Query(ValidationPipe) searchPostDto: SearchPostDto,
    @Query(ValidationPipe) paginationDto: PaginationDto,
  ): Promise<[PostEntity[], number]> {
    // 비밀글 조회를 위한 세팅
    searchPostDto.isLogin = isAuthenticated ? 'Y' : 'N';
    
    return this.postService.listPostSearch(searchPostDto, paginationDto);
  }

  @Get('year')
  @ApiOperation({
    summary: '포스트의 연도 및 개수 조회 API',
    description: '포스트의 연도 및 개수를 조회한다.'
  })
  @ApiCreatedResponse({
    type: PostEntity,
    description: '포스트의 연도 및 개수를 조회한다.',
  })
  listYearAndCount(@IsAuthenticated() isAuthenticated: boolean): Promise<PostEntity[]> {
    const listPostDto: ListPostDto = Builder(ListPostDto)
                                    .isLogin(isAuthenticated ? 'Y' : 'N')
                                    .build();
    return this.postService.listYearAndCount(listPostDto);
  }

  @Get('year/:year')
  @ApiOperation({
    summary: '연도별 포스트 목록 조회 API',
    description: '연도별 포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Post,
    description: '연도별 포스트 목록을 조회한다.',
  })
  @ApiParam({
    type: String,
    name: 'year',
    description: '연도',
  })
  @ApiQuery({
    type: PaginationDto,
    description: '페이지네이션 DTO',
  })
  listPostByYear(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('year') year: string,
    @Query() paginationDto: PaginationDto
  ): Promise<[PostEntity[], number]> {
    const listPostDto: ListPostDto = Builder(ListPostDto)
                                    .year(year)
                                    .isLogin(isAuthenticated ? 'Y' : 'N')
                                    .build();
    return this.postService.listPostByYear(listPostDto, paginationDto);
  }

  @Get('category/:categoryId')
  @ApiOperation({
    summary: '카테고리별 포스트 목록 조회 API',
    description: '카테고리별 포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: PostEntity,
    description: '카테고리별 포스트 목록을 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'categoryId',
    description: '카테고리 ID',
  })
  @ApiQuery({
    type: PaginationDto,
    description: '페이지네이션 DTO',
  })
  listPostByCategory(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Query() paginationDto: PaginationDto
  ): Promise<[PostEntity[], number]> {
    const listPostDto: ListPostDto = Builder(ListPostDto)
                                    .categoryId(categoryId)
                                    .isLogin(isAuthenticated ? 'Y' : 'N')
                                    .build();
    return this.postService.listPostByCategory(listPostDto, paginationDto);
  }

  @Get('tag/:tagId')
  @ApiOperation({
    summary: '태그별 포스트 목록 조회 API',
    description: '태그별 포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: PostEntity,
    description: '태그별 포스트 목록을 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'tagId',
    description: '태그 ID',
  })
  @ApiQuery({
    type: PaginationDto,
    description: '페이지네이션 DTO',
  })
  listPostByTag(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('tagId', ParseIntPipe) tagId: number,
    @Query() paginationDto: PaginationDto
  ): Promise<[PostEntity[], number]> {
    const listPostDto: ListPostDto = Builder(ListPostDto)
                                    .tagId(tagId)
                                    .isLogin(isAuthenticated ? 'Y' : 'N')
                                    .build();
    return this.postService.listPostByTag(listPostDto, paginationDto);
  }

  @Get('prevnext/:id')
  @ApiOperation({
    summary: '이전/다음 포스트 조회 API',
    description: '이전/다음 포스트를 조회한다.'
  })
  @ApiCreatedResponse({
    type: PostEntity,
    description: '이전/다음 포스트를 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '포스트 ID',
  })
  listPrevAndNextPost(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('id', ParseIntPipe) id: number
  ): Promise<PostEntity[]> {
    const listPostDto: ListPostDto = Builder(ListPostDto)
                                    .id(id)
                                    .isLogin(isAuthenticated ? 'Y' : 'N')
                                    .build();
    return this.postService.listPrevAndNextPost(listPostDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: '포스트 상세 조회 API',
    description: '포스트를 조회한다.'
  })
  @ApiCreatedResponse({
    type: PostEntity,
    description: '포스트를 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '포스트 ID',
  })
  getPost(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('id', ParseIntPipe) id: number
  ): Promise<PostEntity> {
    const getPostDto: GetPostDto = Builder(GetPostDto)
                                  .id(id)
                                  .isLogin(isAuthenticated ? 'Y' : 'N')
                                  .build();
    return this.postService.getPost(getPostDto);
  }

  @Post()
  @Auth(RoleEnum.ROLE_ADMIN)
  @UseInterceptors(FileInterceptor('ogImgFile'))
  @ApiOperation({
    summary: '포스트 추가 API',
    description: '포스트를 추가한다.'
  })
  @ApiCreatedResponse({
    type: SavePostDto,
    description: '포스트를 추가한다.',
  })
  @ApiBody({
    type: SavePostDto,
    description: '포스트 추가/수정 DTO',
  })
  addPost(
    @Body(ValidationPipe) savePostDto: SavePostDto,
    @UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
      fileIsRequired: false,
    })) ogImgFile: FileUploaderRequest,
  ) {
    if (isNotFileEmpty(ogImgFile)) {
      savePostDto.ogImgFile = ogImgFile;
    }

    return this.postService.savePost(savePostDto);
  }

  @Put()
  @Auth(RoleEnum.ROLE_ADMIN)
  @UseInterceptors(FileInterceptor('ogImgFile'))
  @ApiOperation({
    summary: '포스트 수정 API',
    description: '포스트를 수정한다.'
  })
  @ApiCreatedResponse({
    type: SavePostDto,
    description: '포스트를 수정한다.',
  })
  @ApiBody({
    type: SavePostDto,
    description: '포스트 추가/수정 DTO',
  })
  updatePost(
    @Body(ValidationPipe) savePostDto: SavePostDto,
    @UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
      fileIsRequired: false,
    })) ogImgFile: FileUploaderRequest,
  ) {
    if (isNotFileEmpty(ogImgFile)) {
      savePostDto.ogImgFile = ogImgFile;
    }

    return this.postService.savePost(savePostDto);
  }

  @Delete()
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '포스트 다건 삭제 API',
    description: '포스트 다건을 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '포스트 다건을 삭제한다.',
  })
  @ApiBody({
    type: RemovePostDto,
    description: '포스트 삭제 DTO',
  })
  removePosts(@Body(ValidationPipe) removePostDto: RemovePostDto[]): Promise<DeleteResult> {
    return this.postService.removePosts(removePostDto);
  }

  @Delete(':id')
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '포스트 삭제 API',
    description: '포스트를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '포스트를 삭제한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '포스트 ID',
  })
  removePost(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.postService.removePost(id);
  }

  @Post('preview')
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '포스트 미리보기 API',
    description: '미리보기 포스트로 응답한다.'
  })
  @ApiCreatedResponse({
    type: PostEntity,
    description: '미리보기 포스트로 응답한다.',
  })
  @ApiBody({
    type: SavePostDto,
    description: '포스트 추가/수정 DTO',
  })
  getPreviewPost(@Body(ValidationPipe) savePostDto: SavePostDto): Promise<PostEntity> {
    return this.postService.getPreviewPost(savePostDto);
  }

}
