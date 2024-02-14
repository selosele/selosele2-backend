import { Controller, Post, Body, ValidationPipe, Get, Query, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AccessTokenUser, Ip, IsAuthenticated } from '@/shared/decorators';
import { PaginationDto } from '@/shared/models';
import { ListGuestbookReplyDto, AddGuestbookReplyDto, RemoveGuestbookReplyDto, UpdateGuestbookReplyDto, GuestbookReplyEntity, GuestbookReplyDto } from '../models';
import { GuestbookReplyService } from "../services/guestbook-reply.service";
import { serialize } from '@/shared/utils';

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
    type: Array<GuestbookReplyDto>,
    description: '방명록 댓글 DTO 목록',
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
  async listGuestbookReply(
    @Query(ValidationPipe) listGuestbookReplyDto: ListGuestbookReplyDto,
    @Query(ValidationPipe) paginationDto: PaginationDto
  ): Promise<[GuestbookReplyDto[], number]> {
    const guestbookReplys: [GuestbookReplyEntity[], number] = await this.guestbookReplyService.listGuestbookReply(listGuestbookReplyDto, paginationDto);

    return [
      serialize<GuestbookReplyDto[]>(guestbookReplys[0]),
      guestbookReplys[1],
    ];
  }

  @Post()
  @ApiOperation({
    summary: '방명록 댓글 등록 API',
    description: '방명록 댓글을 등록한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookReplyDto,
    description: '방명록 댓글 DTO',
  })
  @ApiBody({
    type: AddGuestbookReplyDto,
    description: '방명록 댓글 등록 DTO',
  })
  async addGuestbook(
    @Ip() ip: string,
    @Body(ValidationPipe) addGuestbookReplyDto: AddGuestbookReplyDto,
    @IsAuthenticated() isAuthenticated: boolean,
    @AccessTokenUser('userSn') userSn: number,
  ): Promise<GuestbookReplyDto> {
    addGuestbookReplyDto.ip = ip;
    addGuestbookReplyDto.adminYn = isAuthenticated ? 'Y' : 'N';

    const guestbookReply: GuestbookReplyEntity = await this.guestbookReplyService.addGuestbookReply(addGuestbookReplyDto, userSn);

    return serialize<GuestbookReplyDto>(guestbookReply);
  }

  @Put()
  @ApiOperation({
    summary: '방명록 댓글 수정 API',
    description: '방명록 댓글을 수정한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookReplyDto,
    description: '방명록 댓글 DTO',
  })
  @ApiBody({
    type: UpdateGuestbookReplyDto,
    description: '방명록 댓글 수정 DTO',
  })
  async updateGuestbook(
    @Ip() ip: string,
    @Body(ValidationPipe) updateGuestbookReplyDto: UpdateGuestbookReplyDto,
    @IsAuthenticated() isAuthenticated: boolean,
    @AccessTokenUser('userSn') userSn: number,
  ): Promise<GuestbookReplyDto> {
    updateGuestbookReplyDto.ip = ip;
    updateGuestbookReplyDto.adminYn = isAuthenticated ? 'Y' : 'N';

    const guestbookReply: GuestbookReplyEntity = await this.guestbookReplyService.updateGuestbookReply(updateGuestbookReplyDto, userSn);

    return serialize<GuestbookReplyDto>(guestbookReply);
  }

  @Post('remove')
  @ApiOperation({
    summary: '방명록 댓글 삭제 API',
    description: '방명록 댓글을 삭제한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookReplyDto,
    description: '방명록 댓글',
  })
  @ApiBody({
    type: RemoveGuestbookReplyDto,
    description: '방명록 댓글 삭제 DTO',
  })
  async removeGuestbookReply(
    @IsAuthenticated() isAuthenticated: boolean,
    @Body(ValidationPipe) removeGuestbookReplyDto: RemoveGuestbookReplyDto
  ): Promise<GuestbookReplyDto> {
    removeGuestbookReplyDto.isLogin = isAuthenticated ? 'Y' : 'N';

    const guestbookReply: GuestbookReplyEntity = await this.guestbookReplyService.removeGuestbookReply(removeGuestbookReplyDto);

    return serialize<GuestbookReplyDto>(guestbookReply);
  }

}
