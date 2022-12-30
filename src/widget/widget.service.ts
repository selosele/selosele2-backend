import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListWidgetDto } from './dto/list-widget.dto';
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

}
