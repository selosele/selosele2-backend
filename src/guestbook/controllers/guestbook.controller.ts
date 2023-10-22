import { Body, Controller, Get, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Ip, IsAuthenticated } from 'src/shared/decorators';
import { PaginationDto } from 'src/shared/models';
import { AddGuestbookDto, RemoveGuestbookDto, UpdateGuestbookDto, GuestbookEntity } from '../models';
import { GuestbookService } from '../services/guestbook.service';

@Controller('guestbook')
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
    type: Array<GuestbookEntity>,
    description: '방명록 목록',
  })
  @ApiQuery({
    type: PaginationDto,
    name: 'paginationDto',
    description: '페이지네이션 DTO',
  })
  listGuestbook(
    @Query(ValidationPipe) paginationDto: PaginationDto
  ): Promise<[GuestbookEntity[], number]> {
    return this.guestbookService.listGuestbook(paginationDto);
  }

  @Post()
  @ApiOperation({
    summary: '방명록 등록 API',
    description: '방명록을 등록한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookEntity,
    description: '방명록',
  })
  @ApiBody({
    type: AddGuestbookDto,
    description: '방명록 등록 DTO',
  })
  addGuestbook(
    @Ip() ip: string,
    @Body(ValidationPipe) addGuestbookDto: AddGuestbookDto,
    @IsAuthenticated() isAuthenticated: boolean,
  ): Promise<GuestbookEntity> {
    addGuestbookDto.ip = ip;
    addGuestbookDto.adminYn = isAuthenticated ? 'Y' : 'N';

    return this.guestbookService.addGuestbook(addGuestbookDto);
  }

  @Put()
  @ApiOperation({
    summary: '방명록 수정 API',
    description: '방명록을 수정한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookEntity,
    description: '방명록',
  })
  @ApiBody({
    type: AddGuestbookDto,
    description: '방명록 수정 DTO',
  })
  updateGuestbook(
    @Ip() ip: string,
    @Body(ValidationPipe) updateGuestbookDto: UpdateGuestbookDto
  ): Promise<GuestbookEntity> {
    updateGuestbookDto.ip = ip;

    return this.guestbookService.updateGuestbook(updateGuestbookDto);
  }

  @Post('remove')
  @ApiOperation({
    summary: '방명록 삭제 API',
    description: '방명록을 삭제한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookEntity,
    description: '방명록',
  })
  @ApiBody({
    type: RemoveGuestbookDto,
    description: '방명록 삭제 DTO',
  })
  removeGuestbook(
    @IsAuthenticated() isAuthenticated: boolean,
    @Body(ValidationPipe) removeGuestbookDto: RemoveGuestbookDto
  ): Promise<GuestbookEntity> {
    removeGuestbookDto.isLogin = isAuthenticated ? 'Y' : 'N';
    
    return this.guestbookService.removeGuestbook(removeGuestbookDto);
  }

}
