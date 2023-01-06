import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository, UpdateResult } from 'typeorm';
import { ListWidgetDto } from './dto/list-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
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

  /** 위젯을 수정한다. */
  async updateWidget(updateWidgetDto: UpdateWidgetDto[]): Promise<WidgetEntity[]> {
    return await this.save(updateWidgetDto);
  }

  /** 위젯 사용여부를 수정한다. */
  async updateWidgetUseYn(id: number): Promise<UpdateResult> {
    return await this.createQueryBuilder()
      .update(WidgetEntity)
      .set({
        useYn: 'Y'
      })
      .where("id = :id", { id })
      .execute();
  }

}
