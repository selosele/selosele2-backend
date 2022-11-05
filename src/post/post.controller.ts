import { Controller, Get, Query, Param, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Post } from 'src/post/post.entity';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { PostService } from './post.service';

@Controller('api/post')
@ApiTags('포스트 API')
export class PostsController {
  
  constructor(
    private readonly postService: PostService,
  ) {}

  @Get('list/:limit')
  @ApiOperation({
    summary: '개수별 포스트 조회 API',
    description: '개수별 포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Post,
    description: '개수별 포스트 목록을 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'limit',
    description: '개수',
  })
  listPostByLimit(@Param('limit', ParseIntPipe) limit: number): Promise<Post[]> {
    return this.postService.listPostByLimit(limit);
  }

  @Get('search')
  @ApiOperation({
    summary: '포스트 검색 API',
    description: '포스트를 검색한다.'
  })
  @ApiCreatedResponse({
    type: Post,
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
    @Query(ValidationPipe) searchPostDto: SearchPostDto,
    @Query(ValidationPipe) paginationDto: PaginationDto,
  ): Promise<[Post[], number]> {
    return this.postService.listPostSearch(searchPostDto, paginationDto);
  }

  @Get('year/list')
  @ApiOperation({
    summary: '포스트의 연도 및 개수 조회 API',
    description: '포스트의 연도 및 개수를 조회한다.'
  })
  @ApiCreatedResponse({
    type: Post,
    description: '포스트의 연도 및 개수를 조회한다.',
  })
  listYearAndCount(): Promise<Post[]> {
    return this.postService.listYearAndCount();
  }

  @Get('year/list/:year')
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
    @Param('year') year: string,
    @Query() paginationDto: PaginationDto
  ): Promise<[Post[], number]> {
    return this.postService.listPostByYear(year, paginationDto);
  }

  @Get('category/list/:categoryId')
  @ApiOperation({
    summary: '카테고리별 포스트 목록 조회 API',
    description: '카테고리별 포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Post,
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
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Query() paginationDto: PaginationDto
    ): Promise<[Post[], number]> {
    return this.postService.listPostByCategory(categoryId, paginationDto);
  }

  @Get('tag/list/:tagId')
  @ApiOperation({
    summary: '태그별 포스트 목록 조회 API',
    description: '태그별 포스트 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Post,
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
    @Param('tagId', ParseIntPipe) tagId: number,
    @Query() paginationDto: PaginationDto
    ): Promise<[Post[], number]> {
    return this.postService.listPostByTag(tagId, paginationDto);
  }

}
