import { Controller, Get, Query, ValidationPipe, Put, Body } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RoleEnum } from 'src/auth/models';
import { Auth } from 'src/shared/decorators';
import { ListWidgetDto, UpdateWidgetUseYnDto, UpdateWidgetDto, WidgetEntity } from '../models';
import { WidgetService } from '../services/widget.service';

@Controller('widget')
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
  @Auth(RoleEnum.ROLE_ADMIN)
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
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '위젯 사용 여부 수정 API',
    description: '위젯 사용 여부를 수정한다.',
  })
  @ApiCreatedResponse({
    type: Number,
    description: '위젯 사용 여부를 수정한다.',
  })
  @ApiBody({
    type: UpdateWidgetUseYnDto,
    description: '위젯 사용 여부 수정 DTO',
  })
  updateWidgetUseYn(@Body(ValidationPipe) updateWidgetUseYnDto: UpdateWidgetUseYnDto): Promise<number> {
    return this.widgetService.updateWidgetUseYn(updateWidgetUseYnDto);
  }

}
