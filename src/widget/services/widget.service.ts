import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListWidgetDto, UpdateWidgetUseYnDto, UpdateWidgetDto, WidgetEntity } from '../models';
import { WidgetRepository } from '../repositories/widget.repository';

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

  /** 위젯 사용 여부를 수정한다. */
  async updateWidgetUseYn(updateWidgetUseYnDto: UpdateWidgetUseYnDto): Promise<number> {
    let cnt: number = 0;

    for (const dto of updateWidgetUseYnDto.id) {
      const updated = await this.widgetRepository.updateWidgetUseYn(dto);
      cnt += updated.affected;
    }

    return cnt;
  }

}
