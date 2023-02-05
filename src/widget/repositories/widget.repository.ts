import { CustomRepository } from 'src/configs/database/CustomRepository';
import { Repository, UpdateResult } from 'typeorm';
import { ListWidgetDto, UpdateWidgetDto, WidgetEntity } from '../models';

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

  /** 위젯을 수정한다. */
  async updateWidget(updateWidgetDto: UpdateWidgetDto[]): Promise<WidgetEntity[]> {
    return await this.save(updateWidgetDto);
  }

  /** 위젯 사용 여부를 수정한다. */
  async updateWidgetUseYn(id: number): Promise<UpdateResult> {
    return await this.update(id, {
      useYn: 'Y',
    });
  }

}
