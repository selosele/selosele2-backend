import { Controller, Get, Query, ValidationPipe, Put, Body } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Roles } from '@/auth/models';
import { Auth } from '@/shared/decorators';
import { ListWidgetDto, UpdateWidgetUseYnDto, UpdateWidgetDto, WidgetDto, WidgetEntity } from '../models';
import { WidgetService } from '../services/widget.service';
import { serialize } from '@/shared/utils';

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
    type: Array<WidgetDto>,
    description: '위젯 DTO 목록',
  })
  @ApiQuery({
    type: ListWidgetDto,
    description: '위젯 목록 조회 DTO',
  })
  async listWidget(
    @Query(ValidationPipe) listWidgetDto: ListWidgetDto
  ): Promise<WidgetDto[]> {
    const widgets: WidgetEntity[] = await this.widgetService.listWidget(listWidgetDto);

    return serialize<WidgetDto[]>(widgets);
  }

  @Put()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '위젯 수정 API',
    description: '위젯을 수정한다.',
  })
  @ApiCreatedResponse({
    type: Array<WidgetDto>,
    description: '위젯 DTO 목록',
  })
  @ApiBody({
    type: UpdateWidgetDto,
    description: '위젯 수정 DTO',
  })
  async updateWidget(
    @Body(ValidationPipe) updateWidgetDto: UpdateWidgetDto[]
  ): Promise<WidgetDto[]> {
    const widgets: WidgetEntity[] = await this.widgetService.updateWidget(updateWidgetDto);

    return serialize<WidgetDto[]>(widgets);
  }

  @Put('use')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '위젯 사용 여부 수정 API',
    description: '위젯 사용 여부를 수정한다.',
  })
  @ApiCreatedResponse({
    type: Number,
    description: '위젯 사용 여부 수정 정보',
  })
  @ApiBody({
    type: UpdateWidgetUseYnDto,
    description: '위젯 사용 여부 수정 DTO',
  })
  async updateWidgetUseYn(
    @Body(ValidationPipe) updateWidgetUseYnDto: UpdateWidgetUseYnDto
  ): Promise<number> {
    return await this.widgetService.updateWidgetUseYn(updateWidgetUseYnDto);
  }

}
