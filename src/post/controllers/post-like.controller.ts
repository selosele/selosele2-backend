import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { Builder } from "builder-pattern";
import { Ip, IsAuthenticated } from "src/shared/decorators";
import { GetPostLikeDto, SavePostLikeDto, PostLikeEntity } from "../models";
import { PostLikeService } from "../services/post-like.service";
import { PostLikeDto } from "../models/dto/post-like.dto";
import { serialize } from "src/shared/utils";

@Controller('postlike')
@ApiTags('포스트 추천 API')
export class PostLikeController {

  constructor(
    private readonly postLikeService: PostLikeService,
  ) {}

  @Get(':id')
  @ApiOperation({
    summary: '사용자 포스트 추천 정보 조회 API',
    description: '사용자 포스트 추천 정보를 조회한다.',
  })
  @ApiCreatedResponse({
    type: PostLikeDto,
    description: '포스트 추천 DTO',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '포스트 ID',
  })
  async getPostLike(
    @Ip() ip: string,
    @Param('id', ParseIntPipe) id: number
  ): Promise<PostLikeDto> {
    const getPostLikeDto = Builder(GetPostLikeDto)
                            .postId(id)
                            .ip(ip)
                            .build();

    const postLike: PostLikeEntity = await this.postLikeService.getPostLike(getPostLikeDto);

    return serialize<PostLikeDto>(postLike);
  }

  @Post()
  @ApiOperation({
    summary: '포스트 추천/추천 해제 API',
    description: '포스트를 추천/추천 해제한다.',
  })
  @ApiCreatedResponse({
    type: Number,
    description: '포스트를 추천/추천 해제 정보',
  })
  @ApiBody({
    type: SavePostLikeDto,
    description: '포스트 추천 DTO',
  })
  async savePostLike(
    @Ip() ip: string,
    @Body(ValidationPipe) savePostLikeDto: SavePostLikeDto,
    @IsAuthenticated() isAuthenticated: boolean,
  ): Promise<number> {
    savePostLikeDto.ip = ip;
    savePostLikeDto.isLogin = isAuthenticated ? 'Y' : 'N';
    
    return await this.postLikeService.savePostLike(savePostLikeDto);
  }

}
