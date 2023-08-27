import { Controller, Post, Body, ValidationPipe, Get, Query, Put, Delete } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RealIP } from 'nestjs-real-ip';
import { IsAuthenticated } from 'src/shared/decorators';
import { PaginationDto } from 'src/shared/models';
import { ListGuestbookReplyDto, AddGuestbookReplyDto, RemoveGuestbookReplyDto, UpdateGuestbookReplyDto, GuestbookReplyEntity } from '../models';
import { GuestbookReplyService } from "../services/guestbook-reply.service";

@Controller('guestbookreply')
@ApiTags('방명록 댓글 API')
export class GuestbookReplyController {

  constructor(
    private readonly guestbookReplyService: GuestbookReplyService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '방명록 댓글 목록 조회 API',
    description: '방명록 댓글 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Array<GuestbookReplyEntity>,
    description: '방명록 댓글 목록',
  })
  @ApiQuery({
    type: ListGuestbookReplyDto,
    name: 'listGuestbookReplyDto',
    description: '방명록 댓글 목록 조회 DTO',
  })
  @ApiQuery({
    type: PaginationDto,
    name: 'paginationDto',
    description: '페이지네이션 DTO',
  })
  listGuestbookReply(
    @Query(ValidationPipe) listGuestbookReplyDto: ListGuestbookReplyDto,
    @Query(ValidationPipe) paginationDto: PaginationDto
  ): Promise<[GuestbookReplyEntity[], number]> {
    return this.guestbookReplyService.listGuestbookReply(listGuestbookReplyDto, paginationDto);
  }

  @Post()
  @ApiOperation({
    summary: '방명록 댓글 등록 API',
    description: '방명록 댓글을 등록한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookReplyEntity,
    description: '방명록 댓글',
  })
  @ApiBody({
    type: AddGuestbookReplyDto,
    description: '방명록 댓글 등록 DTO',
  })
  addGuestbook(
    @IsAuthenticated() isAuthenticated: boolean,
    @RealIP() ip: string,
    @Body(ValidationPipe) addGuestbookReplyDto: AddGuestbookReplyDto
  ): Promise<GuestbookReplyEntity> {
    addGuestbookReplyDto.ip = ip;
    addGuestbookReplyDto.adminYn = isAuthenticated ? 'Y' : 'N';

    return this.guestbookReplyService.addGuestbookReply(addGuestbookReplyDto);
  }

  @Put()
  @ApiOperation({
    summary: '방명록 댓글 수정 API',
    description: '방명록 댓글을 수정한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookReplyEntity,
    description: '방명록 댓글',
  })
  @ApiBody({
    type: UpdateGuestbookReplyDto,
    description: '방명록 댓글 수정 DTO',
  })
  updateGuestbook(
    @RealIP() ip: string,
    @Body(ValidationPipe) updateGuestbookReplyDto: UpdateGuestbookReplyDto
  ): Promise<GuestbookReplyEntity> {
    updateGuestbookReplyDto.ip = ip;

    return this.guestbookReplyService.updateGuestbookReply(updateGuestbookReplyDto);
  }

  @Post('remove')
  @ApiOperation({
    summary: '방명록 댓글 삭제 API',
    description: '방명록 댓글을 삭제한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookReplyEntity,
    description: '방명록 댓글',
  })
  @ApiBody({
    type: RemoveGuestbookReplyDto,
    description: '방명록 댓글 삭제 DTO',
  })
  removeGuestbookReply(
    @IsAuthenticated() isAuthenticated: boolean,
    @Body(ValidationPipe) removeGuestbookReplyDto: RemoveGuestbookReplyDto
  ): Promise<GuestbookReplyEntity> {
    removeGuestbookReplyDto.isLogin = isAuthenticated ? 'Y' : 'N';

    return this.guestbookReplyService.removeGuestbookReply(removeGuestbookReplyDto);
  }

}
