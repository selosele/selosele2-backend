import { Body, Controller, Delete, Get, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RealIP } from 'nestjs-real-ip';
import { IsAuthenticated } from 'src/shared/decorator/auth/is-authenticated.decorator';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { AddGuestbookDto } from './dto/add-guestbook.dto';
import { RemoveGuestbookDto } from './dto/remove-guestbook.dto';
import { UpdateGuestbookDto } from './dto/update-guestbook.dto';
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
    summary: '방명록 추가 API',
    description: '방명록을 추가한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookEntity,
    description: '방명록을 추가한다.',
  })
  @ApiBody({
    type: AddGuestbookDto,
    description: '방명록 추가 DTO',
  })
  addGuestbook(
    @RealIP() ip: string,
    @Body(ValidationPipe) addGuestbookDto: AddGuestbookDto
  ): Promise<GuestbookEntity> {
    addGuestbookDto.ip = ip;
    return this.guestbookService.addGuestbook(addGuestbookDto);
  }

  @Put()
  @ApiOperation({
    summary: '방명록 수정 API',
    description: '방명록을 수정한다.',
  })
  @ApiCreatedResponse({
    type: GuestbookEntity,
    description: '방명록을 수정한다.',
  })
  @ApiBody({
    type: AddGuestbookDto,
    description: '방명록 수정 DTO',
  })
  updateGuestbook(@Body(ValidationPipe) updateGuestbookDto: UpdateGuestbookDto): Promise<GuestbookEntity> {
    return this.guestbookService.updateGuestbook(updateGuestbookDto);
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
    @IsAuthenticated() isAuthenticated: boolean,
    @Body(ValidationPipe) removeGuestbookDto: RemoveGuestbookDto
  ): Promise<GuestbookEntity> {
    removeGuestbookDto.isLogin = isAuthenticated ? 'Y' : 'N';
    return this.guestbookService.removeGuestbook(removeGuestbookDto);
  }

}
