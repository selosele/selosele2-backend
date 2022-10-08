import { Controller, Get, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Post } from 'src/post/post.entity';
import { PostService } from './post.service';

@Controller('api/post')
@ApiTags('포스트 API')
export class PostsController {
  constructor(private readonly postService: PostService) {}

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
