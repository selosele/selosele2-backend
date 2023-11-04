import { Body, Controller, Get, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Ip, IsAuthenticated } from 'src/shared/decorators';
import { PaginationDto } from 'src/shared/models';
import { AddGuestbookDto, RemoveGuestbookDto, UpdateGuestbookDto, GuestbookEntity } from '../models';
import { GuestbookService } from '../services/guestbook.service';
import { GuestbookDto } from '../models/dto/guestbook.dto';
import { serialize } from 'src/shared/utils';

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
    type: Array<GuestbookDto>,
    description: '방명록 DTO 목록',
  })
  @ApiQuery({
    type: PaginationDto,
    name: 'paginationDto',
    description: '페이지네이션 DTO',
  })
  async listGuestbook(
    @Query(ValidationPipe) paginationDto: PaginationDto
  ): Promise<[GuestbookDto[], number]> {
    const guestbooks: [GuestbookEntity[], number] = await this.guestbookService.listGuestbook(paginationDto);

    return [
      serialize<GuestbookDto[]>(guestbooks[0]),
      guestbooks[1],
    ];
  }

  @Post()
  @ApiOperation({
    summary: '방명록 등록 API',
    description: '방명록을 등록한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookDto,
    description: '방명록 DTO',
  })
  @ApiBody({
    type: AddGuestbookDto,
    description: '방명록 등록 DTO',
  })
  async addGuestbook(
    @Ip() ip: string,
    @Body(ValidationPipe) addGuestbookDto: AddGuestbookDto,
    @IsAuthenticated() isAuthenticated: boolean,
  ): Promise<GuestbookDto> {
    addGuestbookDto.ip = ip;
    addGuestbookDto.adminYn = isAuthenticated ? 'Y' : 'N';

    const guestbook: GuestbookEntity = await this.guestbookService.addGuestbook(addGuestbookDto);

    return serialize<GuestbookDto>(guestbook);
  }

  @Put()
  @ApiOperation({
    summary: '방명록 수정 API',
    description: '방명록을 수정한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookDto,
    description: '방명록 DTO',
  })
  @ApiBody({
    type: AddGuestbookDto,
    description: '방명록 수정 DTO',
  })
  async updateGuestbook(
    @Ip() ip: string,
    @Body(ValidationPipe) updateGuestbookDto: UpdateGuestbookDto
  ): Promise<GuestbookDto> {
    updateGuestbookDto.ip = ip;

    const guestbook: GuestbookEntity = await this.guestbookService.updateGuestbook(updateGuestbookDto);

    return serialize<GuestbookDto>(guestbook);
  }

  @Post('remove')
  @ApiOperation({
    summary: '방명록 삭제 API',
    description: '방명록을 삭제한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookDto,
    description: '방명록 DTO',
  })
  @ApiBody({
    type: RemoveGuestbookDto,
    description: '방명록 삭제 DTO',
  })
  async removeGuestbook(
    @IsAuthenticated() isAuthenticated: boolean,
    @Body(ValidationPipe) removeGuestbookDto: RemoveGuestbookDto
  ): Promise<GuestbookDto> {
    removeGuestbookDto.isLogin = isAuthenticated ? 'Y' : 'N';

    const guestbook: GuestbookEntity = await this.guestbookService.removeGuestbook(removeGuestbookDto);
    
    return serialize<GuestbookDto>(guestbook);
  }

}
