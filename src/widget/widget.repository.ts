import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { ListWidgetDto } from './dto/list-widget.dto';
import { WidgetEntity } from './entities/widget.entity';

@CustomRepository(WidgetEntity)
export class WidgetRepository extends Repository<WidgetEntity> {

  /** 위젯 목록을 조회한다. */
  async listWidget(listWidgetDto: ListWidgetDto): Promise<WidgetEntity[]> {
    return await this.find({
      where: {
        useYn: listWidgetDto.useYn,
      },
      order: {
        sort: 'ASC',
      },
    });
  }

}
