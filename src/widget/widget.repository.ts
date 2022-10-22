import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { ListWidgetDto } from './dto/list-widget.dto';
import { Widget } from './widget.entity';

@CustomRepository(Widget)
export class WidgetRepository extends Repository<Widget> {

  // 위젯 목록을 조회한다.
  async listWidget(listWidgetDto: ListWidgetDto): Promise<Widget[]> {
    return await this.find({
      where: {
        useYn: listWidgetDto.useYn,
      },
      order: {
        position: 'ASC',
      },
    });
  }

}
