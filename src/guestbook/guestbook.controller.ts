import { Body, Controller, Delete, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RealIP } from 'nestjs-real-ip';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AddGuestbookDto } from './dto/add-guestbook.dto';
import { RemoveGuestbookDto } from './dto/remove-guestbook.dto';
import { GuestbookEntity } from './guestbook.entity';
import { GuestbookService } from './guestbook.service';

@Controller('api/guestbook')
@ApiTags('방명록 API')
export class GuestbookController {

  constructor(
    private readonly guestbookService: GuestbookService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '방명록 목록 조회 API',
    description: '방명록 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookEntity,
    description: '방명록 목록을 조회한다.',
  })
  @ApiQuery({
    type: PaginationDto,
    name: 'paginationDto',
    description: '페이지네이션 DTO',
  })
  listGuestbook(@Query(ValidationPipe) paginationDto: PaginationDto): Promise<[GuestbookEntity[], number]> {
    return this.guestbookService.listGuestbook(paginationDto);
  }

  @Post()
  @ApiOperation({
    summary: '방명록 등록 API',
    description: '방명록을 등록한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookEntity,
    description: '방명록을 등록한다.',
  })
  @ApiBody({
    type: AddGuestbookDto,
    description: '방명록 등록 DTO',
  })
  addGuestbook(
    @RealIP() ip: string,
    @Body(ValidationPipe) addGuestbookDto: AddGuestbookDto
  ): Promise<GuestbookEntity> {
    addGuestbookDto.ip = ip;
    return this.guestbookService.addGuestbook(addGuestbookDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '방명록 삭제 API',
    description: '방명록을 삭제한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookEntity,
    description: '방명록을 삭제한다.',
  })
  @ApiBody({
    type: AddGuestbookDto,
    description: '방명록 삭제 DTO',
  })
  removeGuestbook(
    @Body(ValidationPipe) removeGuestbookDto: RemoveGuestbookDto
  ): Promise<GuestbookEntity> {
    return this.guestbookService.removeGuestbook(removeGuestbookDto);
  }

}
