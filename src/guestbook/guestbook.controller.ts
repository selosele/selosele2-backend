import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/shared/dto/pagination.dto';
import { Guestbook } from './guestbook.entity';
import { GuestbookService } from './guestbook.service';

@Controller('api/guestbook')
@ApiTags('방명록 API')
export class GuestbookController {

  constructor(
    private readonly guestbookService: GuestbookService,
  ) {}

  @Get('list')
  @ApiOperation({
    summary: '방명록 목록 조회 API',
    description: '방명록 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Guestbook,
    description: '방명록 목록을 조회한다.',
  })
  @ApiQuery({
    type: PaginationDto,
    name: 'paginationDto',
    description: '페이지네이션 DTO',
  })
  listGuestbook(@Query(ValidationPipe) paginationDto: PaginationDto): Promise<[Guestbook[], number]> {
    return this.guestbookService.listGuestbook(paginationDto);
  }

}
