import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ListWidgetDto } from './dto/list-widget.dto';
import { WidgetEntity } from './widget.entity';
import { WidgetService } from './widget.service';

@Controller('api/widget')
@ApiTags('위젯 API')
export class WidgetController {

  constructor(
    private readonly widgetService: WidgetService,
  ) {}

  @Get('list')
  @ApiOperation({
    summary: '위젯 목록 조회 API',
    description: '위젯 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: WidgetEntity,
    description: '위젯 목록을 조회한다.',
  })
  @ApiQuery({
    type: ListWidgetDto,
    description: '위젯 목록 조회 DTO',
  })
  listWidget(@Query(ValidationPipe) listWidgetDto: ListWidgetDto): Promise<WidgetEntity[]> {
    return this.widgetService.listWidget(listWidgetDto);
  }

}
