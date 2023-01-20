import { Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { Builder } from "builder-pattern";
import { RealIP } from "nestjs-real-ip";
import { IsAuthenticated } from "src/shared/decorators";
import { GetPostLikeDto, SavePostLikeDto, PostLikeEntity } from "../models";
import { PostLikeService } from "../services/post-like.service";

@Controller('postlike')
@ApiTags('포스트 추천 API')
export class PostLikeController {

  constructor(
    private readonly postLikeService: PostLikeService,
  ) {}

  @Get(':id')
  @ApiOperation({
    summary: '포스트 추천 정보 조회 API',
    description: '포스트 추천 정보를 조회한다.',
  })
  @ApiCreatedResponse({
    type: PostLikeEntity,
    description: '포스트 추천 정보를 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '포스트 ID',
  })
  getPostLike(
    @RealIP() ip: string,
    @Param('id', ParseIntPipe) id: number
  ): Promise<PostLikeEntity> {
    const getPostLikeDto: GetPostLikeDto = Builder(GetPostLikeDto)
      .postId(id)
      .ip(ip)
      .build();
    return this.postLikeService.getPostLike(getPostLikeDto);
  }

  @Post(':id')
  @ApiOperation({
    summary: '포스트 추천/추천 해제 API',
    description: '포스트를 추천/추천 해제한다.',
  })
  @ApiCreatedResponse({
    type: Number,
    description: '포스트를 추천/추천 해제한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '포스트 ID',
  })
  savePostLike(
    @IsAuthenticated() isAuthenticated: boolean,
    @RealIP() ip: string,
    @Param('id', ParseIntPipe) id: number
  ): Promise<number> {
    const savePostLikeDto: SavePostLikeDto = Builder(SavePostLikeDto)
      .postId(id)
      .ip(ip)
      .isLogin(isAuthenticated ? 'Y' : 'N')
      .build();
    return this.postLikeService.savePostLike(savePostLikeDto);
  }

}
