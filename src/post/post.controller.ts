import { Controller, Get, Query, Param, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Post } from 'src/post/post.entity';
import { SearchPostDto } from './dto/search-post.dto';
import { PostService } from './post.service';

@Controller('api/post')
@ApiTags('포스트 API')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Get('search')
  @ApiOperation({
    summary: '포스트 검색 API',
    description: '포스트를 검색한다.'
  })
  @ApiCreatedResponse({
    description: '포스트를 검색한다.',
    type: Post
  })
  listPostSearch(@Query(ValidationPipe) searchPostDto: SearchPostDto): Promise<Post[]> {
    return this.postService.listPostSearch(searchPostDto);
  }

  @Get('year/list')
  @ApiOperation({
    summary: '포스트의 연도 및 개수 조회 API',
    description: '포스트의 연도 및 개수를 조회한다.'
  })
  @ApiCreatedResponse({
    description: '포스트의 연도 및 개수를 조회한다.',
    type: Post
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
    description: '연도별 포스트 목록을 조회한다.',
    type: Post
  })
  listPostsByYear(@Param('year') year: string): Promise<Post[]> {
    return this.postService.listPostsByYear(year);
  }

}
