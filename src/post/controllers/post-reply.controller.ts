import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common";
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { RealIP } from "nestjs-real-ip";
import { IsAuthenticated } from "src/shared/decorators";
import { PostReplyEntity } from "../models";
import { SavePostReplyDto } from "../models/dto/save-post-reply.dto";
import { PostReplyService } from "../services/post-reply.service";

@Controller('postreply')
@ApiTags('포스트 댓글 API')
export class PostReplyController {

  constructor(
    private readonly postReplyService: PostReplyService,
  ) {}

  @Get('list/:postId')
  @ApiOperation({
    summary: '포스트 댓글 목록 조회 API',
    description: '포스트 댓글 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: PostReplyEntity,
    description: '포스트 댓글 목록을 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'postId',
    description: '포스트 ID',
  })
  listPostReply(@Param('postId', ParseIntPipe) postId: number): Promise<[PostReplyEntity[], number]> {
    return this.postReplyService.listPostReply(postId);
  }

  @Post()
  @ApiOperation({
    summary: '포스트 댓글 추가 API',
    description: '포스트 댓글을 추가한다.'
  })
  @ApiCreatedResponse({
    type: PostReplyEntity,
    description: '포스트 댓글을 추가한다.',
  })
  @ApiBody({
    type: SavePostReplyDto,
    description: '포스트 댓글 추가/수정/삭제 DTO',
  })
  addPostReply(
    @IsAuthenticated() isAuthenticated: boolean,
    @RealIP() ip: string,
    @Body(ValidationPipe) savePostReplyDto: SavePostReplyDto
  ) {
    savePostReplyDto.isLogin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.isAdmin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.ip = ip;

    return this.postReplyService.savePostReply(savePostReplyDto);
  }

  @Put()
  @ApiOperation({
    summary: '포스트 댓글 수정 API',
    description: '포스트 댓글을 수정한다.'
  })
  @ApiCreatedResponse({
    type: PostReplyEntity,
    description: '포스트 댓글을 수정한다.',
  })
  @ApiBody({
    type: SavePostReplyDto,
    description: '포스트 댓글 추가/수정/삭제 DTO',
  })
  updatePostReply(
    @IsAuthenticated() isAuthenticated: boolean,
    @RealIP() ip: string,
    @Body(ValidationPipe) savePostReplyDto: SavePostReplyDto
  ) {
    savePostReplyDto.isLogin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.isAdmin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.ip = ip;

    return this.postReplyService.savePostReply(savePostReplyDto);
  }

  @Post('remove')
  @ApiOperation({
    summary: '포스트 댓글 삭제 API',
    description: '포스트 댓글을 삭제한다.'
  })
  @ApiCreatedResponse({
    type: PostReplyEntity,
    description: '포스트 댓글을 삭제한다.',
  })
  @ApiBody({
    type: SavePostReplyDto,
    description: '포스트 댓글 추가/수정/삭제 DTO',
  })
  removePostReply(
    @IsAuthenticated() isAuthenticated: boolean,
    @RealIP() ip: string,
    @Body(ValidationPipe) savePostReplyDto: SavePostReplyDto
  ) {
    savePostReplyDto.isLogin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.isAdmin = isAuthenticated ? 'Y' : 'N';
    savePostReplyDto.ip = ip;

    return this.postReplyService.savePostReply(savePostReplyDto);
  }

}
