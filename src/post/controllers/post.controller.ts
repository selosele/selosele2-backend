import { Controller, Get, Post, Query, Param, ValidationPipe, ParseIntPipe, Delete, Body, UseInterceptors, ParseFilePipe, UploadedFile, Put, Logger } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { Roles } from '@/auth/models';
import { FileUploaderRequest } from '@/file-uploader/models/file-uploader.model';
import { Auth, Ip, IsAuthenticated } from '@/shared/decorators';
import { PaginationDto } from '@/shared/models';
import { FileTypeValidator, isNotFileEmpty, MaxFileSizeValidator, serialize } from '@/shared/utils';
import { DeleteResult } from 'typeorm';
import { GetPostDto, ListPostDto, RemovePostDto, SearchPostDto, PostEntity, PostDto, SavePostDto } from '../models';
import { PostService } from '../services/post.service';
import { ListIndexSearchDto } from '@/index-search/models';

@Controller('post')
@ApiTags('포스트 API')
export class PostController {

  private readonly logger = new Logger(PostService.name);
  
  constructor(
    private readonly postService: PostService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '포스트 목록 조회 API',
    description: '포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<PostDto>,
    description: '포스트 DTO 목록',
  })
  @ApiQuery({
    type: ListPostDto,
    name: 'listPostDto',
    description: '포스트 목록 조회 DTO',
  })
  async listPost(
    @IsAuthenticated() isAuthenticated: boolean,
    @Query(ValidationPipe) listPostDto: ListPostDto,
  ): Promise<[PostDto[], number]> {
    // 비밀 포스트 조회를 위한 세팅
    listPostDto.isLogin = isAuthenticated ? 'Y' : 'N';

    let posts: [PostEntity[], number];

    // 메인 포스트 목록 조회
    if ('D01001' === listPostDto.pageType) {
      posts = await this.postService.listPostMain(listPostDto);
    } else {
      posts = await this.postService.listPost(listPostDto);
    }

    return [
      serialize<PostDto[]>(posts[0]),
      posts[1],
    ];
  }

  @Get('search')
  @ApiOperation({
    summary: '포스트 검색 API',
    description: '포스트를 검색한다.'
  })
  @ApiCreatedResponse({
    type: Array<PostDto>,
    description: '포스트 DTO 목록',
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
  async listPostSearch(
    @Ip() ip: string,
    @Query(ValidationPipe) searchPostDto: SearchPostDto,
    @Query(ValidationPipe) paginationDto: PaginationDto,
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<[PostDto[], number]> {

    this.logger.warn(`Try to search... q : ${searchPostDto.q}, ip: ${ip}`);

    // 비밀 포스트 조회를 위한 세팅
    searchPostDto.isLogin = isAuthenticated ? 'Y' : 'N';

    const posts: [ListIndexSearchDto[], number] = await this.postService.listPostSearch(searchPostDto, paginationDto);
    
    return [
      serialize<PostDto[]>(posts[0]),
      posts[1],
    ];
  }

  @Get('year')
  @ApiOperation({
    summary: '포스트의 연도 및 개수 조회 API',
    description: '포스트의 연도 및 개수를 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<PostDto>,
    description: '포스트 DTO 목록',
  })
  async listYearAndCount(
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<PostDto[]> {
    const listPostDto = Builder(ListPostDto)
                        .isLogin(isAuthenticated ? 'Y' : 'N')
                        .build();

    const posts: PostEntity[] = await this.postService.listYearAndCount(listPostDto);

    return serialize<PostDto[]>(posts);
  }

  @Get('year/:year')
  @ApiOperation({
    summary: '연도별 포스트 목록 조회 API',
    description: '연도별 포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<PostDto>,
    description: '포스트 DTO 목록',
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
  async listPostByYear(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('year') year: string,
    @Query() paginationDto: PaginationDto
  ): Promise<[PostDto[], number]> {
    const listPostDto = Builder(ListPostDto)
                        .year(year)
                        .isLogin(isAuthenticated ? 'Y' : 'N')
                        .build();

    const posts: [PostEntity[], number] = await this.postService.listPostByYear(listPostDto, paginationDto);

    return [
      serialize<PostDto[]>(posts[0]),
      posts[1],
    ];
  }

  @Get('category/:categoryId')
  @ApiOperation({
    summary: '카테고리별 포스트 목록 조회 API',
    description: '카테고리별 포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<PostDto>,
    description: '포스트 DTO 목록',
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
  async listPostByCategory(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Query() paginationDto: PaginationDto
  ): Promise<[PostDto[], number]> {
    const listPostDto = Builder(ListPostDto)
                        .categoryId(categoryId)
                        .isLogin(isAuthenticated ? 'Y' : 'N')
                        .build();

    const posts: [PostEntity[], number] = await this.postService.listPostByCategory(listPostDto, paginationDto);

    return [
      serialize<PostDto[]>(posts[0]),
      posts[1],
    ];
  }

  @Get('tag/:tagId')
  @ApiOperation({
    summary: '태그별 포스트 목록 조회 API',
    description: '태그별 포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<PostDto>,
    description: '포스트 DTO 목록',
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
  async listPostByTag(
    @IsAuthenticated() isAuthenticated: boolean,
    @Param('tagId', ParseIntPipe) tagId: number,
    @Query() paginationDto: PaginationDto
  ): Promise<[PostDto[], number]> {
    const listPostDto = Builder(ListPostDto)
                        .tagId(tagId)
                        .isLogin(isAuthenticated ? 'Y' : 'N')
                        .build();

    const posts: [PostEntity[], number] = await this.postService.listPostByTag(listPostDto, paginationDto);

    return [
      serialize<PostDto[]>(posts[0]),
      posts[1],
    ];
  }

  @Get(':id')
  @ApiOperation({
    summary: '포스트 상세 조회 API',
    description: '포스트를 조회한다.'
  })
  @ApiCreatedResponse({
    type: PostDto,
    description: '포스트 DTO',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '포스트 ID',
  })
  async getPost(
    @Ip() ip: string,
    @Param('id', ParseIntPipe) id: number,
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<PostDto> {
    const getPostDto = Builder(GetPostDto)
                        .id(id)
                        .ip(ip)
                        .isLogin(isAuthenticated ? 'Y' : 'N')
                        .build();
    return await this.postService.getPost(getPostDto);
  }

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @UseInterceptors(FileInterceptor('ogImgFile'))
  @ApiOperation({
    summary: '포스트 등록 API',
    description: '포스트를 등록한다.'
  })
  @ApiCreatedResponse({
    type: PostDto,
    description: '포스트 DTO',
  })
  @ApiBody({
    type: SavePostDto,
    description: '포스트 등록/수정 DTO',
  })
  async addPost(
    @Body(ValidationPipe) savePostDto: SavePostDto,
    @UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
      fileIsRequired: false,
    })) ogImgFile: FileUploaderRequest,
  ): Promise<PostDto> {
    if (isNotFileEmpty(ogImgFile)) {
      savePostDto.ogImgFile = ogImgFile;
    }

    const post: PostEntity = await this.postService.savePost(savePostDto);

    return serialize<PostDto>(post);
  }

  @Put()
  @Auth(Roles.ROLE_ADMIN)
  @UseInterceptors(FileInterceptor('ogImgFile'))
  @ApiOperation({
    summary: '포스트 수정 API',
    description: '포스트를 수정한다.'
  })
  @ApiCreatedResponse({
    type: PostDto,
    description: '포스트 DTO',
  })
  @ApiBody({
    type: SavePostDto,
    description: '포스트 등록/수정 DTO',
  })
  async updatePost(
    @Body(ValidationPipe) savePostDto: SavePostDto,
    @UploadedFile(new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ }),
      ],
      fileIsRequired: false,
    })) ogImgFile: FileUploaderRequest,
  ): Promise<PostDto> {
    if (isNotFileEmpty(ogImgFile)) {
      savePostDto.ogImgFile = ogImgFile;
    }

    const post: PostEntity = await this.postService.savePost(savePostDto);

    return serialize<PostDto>(post);
  }

  @Post('remove')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '포스트 다건 삭제 API',
    description: '포스트 다건을 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '포스트 다건을 삭제 정보',
  })
  @ApiBody({
    type: RemovePostDto,
    description: '포스트 삭제 DTO',
  })
  async removePosts(
    @Body(ValidationPipe) removePostDto: RemovePostDto[]
  ): Promise<DeleteResult> {
    return await this.postService.removePosts(removePostDto);
  }

  @Delete(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '포스트 삭제 API',
    description: '포스트를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '포스트를 삭제 정보',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '포스트 ID',
  })
  async removePost(
    @Param('id', ParseIntPipe) id: number
  ): Promise<DeleteResult> {
    return await this.postService.removePost(id);
  }

  @Post('preview')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '포스트 미리보기 API',
    description: '미리보기 포스트로 응답한다.'
  })
  @ApiCreatedResponse({
    type: PostDto,
    description: '포스트 DTO',
  })
  @ApiBody({
    type: SavePostDto,
    description: '포스트 등록/수정 DTO',
  })
  async getPreviewPost(
    @Body(ValidationPipe) savePostDto: SavePostDto
  ): Promise<PostDto> {
    const post: PostEntity = await this.postService.getPreviewPost(savePostDto);

    return serialize<PostDto>(post);
  }

}
