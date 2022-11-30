import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RealIP } from 'nestjs-real-ip';
import { AddGuestbookReplyDto } from './dto/add-guestbook-reply.dto';
import { GuestbookReplyEntity } from './guestbook-reply.entity';
import { GuestbookReplyService } from "./guestbook-reply.service";

@Controller('api/guestbookreply')
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
    @RealIP() ip: string,
    @Body(ValidationPipe) addGuestbookReplyDto: AddGuestbookReplyDto
  ): Promise<GuestbookReplyEntity> {
    addGuestbookReplyDto.ip = ip;
    return this.guestbookReplyService.addGuestbookReply(addGuestbookReplyDto);
  }

}
