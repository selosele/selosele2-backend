import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Roles } from "@/auth/models";
import { Auth, Ip, IsAuthenticated } from "@/shared/decorators";
import { UpdateResult } from "typeorm";
import { ListPostReplyDto, PostReplyDto, PostReplyEntity, SavePostReplyDto } from "../models";
import { PostReplyService } from "../services/post-reply.service";
import { serialize } from "@/shared/utils";

@Controller('postreply')
@ApiTags('포스트 댓글 API')
export class PostReplyController {

  constructor(
    private readonly postReplyService: PostReplyService,
  ) {}

  @Get()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '모든 포스트 댓글 목록 조회 API',
    description: '모든 포스트 댓글 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<PostReplyDto>,
    description: '포스트 댓글 DTO 목록',
  })
  @ApiQuery({
    type: ListPostReplyDto,
    name: 'listPostReplyDto',
    description: '포스트 댓글 목록 조회 DTO',
  })
  async listPostReplyAll(
    @Query(ValidationPipe) listPostReplyDto: ListPostReplyDto
  ): Promise<PostReplyDto[]> {
    const postReplys: PostReplyEntity[] = await this.postReplyService.listPostReplyAll(listPostReplyDto);

    return serialize<PostReplyDto[]>(postReplys);
  }

  @Get('list/:postId')
  @ApiOperation({
    summary: '포스트 댓글 목록 조회 API',
    description: '포스트 댓글 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Array<PostReplyDto>,
    description: '포스트 댓글 DTO 목록',
  })
  @ApiParam({
    type: Number,
    name: 'postId',
    description: '포스트 ID',
  })
  async listPostReply(
    @Param('postId', ParseIntPipe) postId: number
  ): Promise<PostReplyDto[]> {
    const postReplys: PostReplyEntity[] = await this.postReplyService.listPostReply(postId);

    return serialize<PostReplyDto[]>(postReplys);
  }

  @Post()
  @ApiOperation({
    summary: '포스트 댓글 등록 API',
    description: '포스트 댓글을 등록한다.'
  })
  @ApiCreatedResponse({
    type: PostReplyDto,
    description: '포스트 댓글 DTO',
  })
  @ApiBody({
    type: SavePostReplyDto,
    description: '포스트 댓글 등록/수정/삭제 DTO',
  })
  async addPostReply(
    @Ip() ip: string,
    @Body(ValidationPipe) savePostReplyDto: SavePostReplyDto,
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<PostReplyDto> {
    savePostReplyDto.isLogin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.isAdmin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.ip = ip;

    const postReply: PostReplyEntity = await this.postReplyService.savePostReply(savePostReplyDto);

    return serialize<PostReplyDto>(postReply);
  }

  @Put()
  @ApiOperation({
    summary: '포스트 댓글 수정 API',
    description: '포스트 댓글을 수정한다.'
  })
  @ApiCreatedResponse({
    type: PostReplyDto,
    description: '포스트 댓글 DTO',
  })
  @ApiBody({
    type: SavePostReplyDto,
    description: '포스트 댓글 등록/수정/삭제 DTO',
  })
  async updatePostReply(
    @Ip() ip: string,
    @Body(ValidationPipe) savePostReplyDto: SavePostReplyDto,
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<PostReplyDto> {
    savePostReplyDto.isLogin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.isAdmin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.ip = ip;

    const postReply: PostReplyEntity = await this.postReplyService.savePostReply(savePostReplyDto);

    return serialize<PostReplyDto>(postReply);
  }

  @Put('restore')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '삭제된 포스트 댓글 복구 API',
    description: '삭제된 포스트 댓글을 복구한다.'
  })
  @ApiCreatedResponse({
    type: Number,
    description: '삭제된 포스트 댓글을 복구 정보',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '포스트 댓글 ID',
  })
  async updatePostReplyDelYn(
    @Ip() ip: string,
    @Body(ValidationPipe) savePostReplyDto: SavePostReplyDto[]
  ): Promise<number> {
    let cnt: number = 0;

    for (const dto of savePostReplyDto) {
      dto.ip = ip;

      let res: UpdateResult = await this.postReplyService.updatePostReplyDelYn(dto);
      cnt += res.affected;
    }

    return cnt;
  }

  @Post('remove')
  @ApiOperation({
    summary: '포스트 댓글 삭제 API',
    description: '포스트 댓글을 삭제한다.'
  })
  @ApiCreatedResponse({
    type: PostReplyDto,
    description: '포스트 댓글 DTO',
  })
  @ApiBody({
    type: SavePostReplyDto,
    description: '포스트 댓글 등록/수정/삭제 DTO',
  })
  async removePostReply(
    @Ip() ip: string,
    @Body(ValidationPipe) savePostReplyDto: SavePostReplyDto,
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<PostReplyDto> {
    savePostReplyDto.isLogin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.isAdmin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.ip = ip;

    const postReply: PostReplyEntity = await this.postReplyService.savePostReply(savePostReplyDto);

    return serialize<PostReplyDto>(postReply);
  }

}
