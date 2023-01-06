import { Controller, Get, Query, ValidationPipe, Put, Body } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ListWidgetDto } from './dto/list-widget.dto';
import { UpdateWidgetUseYnDto } from './dto/update-widget-use-yn.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { WidgetEntity } from './entities/widget.entity';
import { WidgetService } from './widget.service';

@Controller('api/widget')
@ApiTags('위젯 API')
export class WidgetController {

  constructor(
    private readonly widgetService: WidgetService,
  ) {}

  @Get()
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

  @Put()
  @ApiOperation({
    summary: '위젯 수정 API',
    description: '위젯을 수정한다.',
  })
  @ApiCreatedResponse({
    type: WidgetEntity,
    description: '위젯을 수정한다.',
  })
  @ApiBody({
    type: UpdateWidgetDto,
    description: '위젯 수정 DTO',
  })
  updateWidget(@Body(ValidationPipe) updateWidgetDto: UpdateWidgetDto[]): Promise<WidgetEntity[]> {
    return this.widgetService.updateWidget(updateWidgetDto);
  }

  @Put('use')
  @ApiOperation({
    summary: '위젯 사용여부 수정 API',
    description: '위젯 사용여부를 수정한다.',
  })
  @ApiCreatedResponse({
    type: Number,
    description: '위젯 사용여부를 수정한다.',
  })
  @ApiBody({
    type: UpdateWidgetUseYnDto,
    description: '위젯 사용여부 수정 DTO',
  })
  updateWidgetUseYn(@Body(ValidationPipe) updateWidgetUseYnDto: UpdateWidgetUseYnDto): Promise<number> {
    return this.widgetService.updateWidgetUseYn(updateWidgetUseYnDto);
  }

}
