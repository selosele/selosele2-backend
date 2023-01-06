import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListWidgetDto } from './dto/list-widget.dto';
import { UpdateWidgetUseYnDto } from './dto/update-widget-use-yn.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { WidgetEntity } from './entities/widget.entity';
import { WidgetRepository } from './widget.repository';

@Injectable()
export class WidgetService {

  constructor(
    @InjectRepository(WidgetRepository)
    private readonly widgetRepository: WidgetRepository,
  ) {}

  /** 위젯 목록을 조회한다. */
  async listWidget(listWidgetDto: ListWidgetDto): Promise<WidgetEntity[]> {
    return await this.widgetRepository.listWidget(listWidgetDto);
  }

  /** 위젯을 수정한다. */
  async updateWidget(updateWidgetDto: UpdateWidgetDto[]): Promise<WidgetEntity[]> {
    return await this.widgetRepository.updateWidget(updateWidgetDto);
  }

  /** 위젯 사용여부를 수정한다. */
  async updateWidgetUseYn(updateWidgetUseYnDto: UpdateWidgetUseYnDto): Promise<number> {
    let cnt = 0;

    for (const dto of updateWidgetUseYnDto.useWidgetId) {
      const updated = await this.widgetRepository.updateWidgetUseYn(dto);
      cnt += updated.affected;
    }

    return cnt;
  }

}
