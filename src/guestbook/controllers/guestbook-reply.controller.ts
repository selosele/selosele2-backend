import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RealIP } from 'nestjs-real-ip';
import { IsAuthenticated } from 'src/shared/decorators';
import { AddGuestbookReplyDto, GuestbookReplyEntity } from '../models';
import { GuestbookReplyService } from "../services/guestbook-reply.service";

@Controller('guestbookreply')
@ApiTags('방명록 댓글 API')
export class GuestbookReplyController {

  constructor(
    private readonly guestbookReplyService: GuestbookReplyService,
  ) {}

  @Post()
  @ApiOperation({
    summary: '방명록 댓글 등록 API',
    description: '방명록 댓글을 등록한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookReplyEntity,
    description: '방명록 댓글을 등록한다.',
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
    if (isAuthenticated) {
      addGuestbookReplyDto.adminYn = 'Y';
    }

    addGuestbookReplyDto.ip = ip;

    return this.guestbookReplyService.addGuestbookReply(addGuestbookReplyDto);
  }

}
