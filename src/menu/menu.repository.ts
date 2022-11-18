import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';

@CustomRepository(Menu)
export class MenuRepository extends Repository<Menu> {

  // 메뉴 목록을 조회한다.
  async listMenu(): Promise<Menu[]> {
    return await this.createQueryBuilder('menu')
      .leftJoinAndSelect("menu.children", "parent")
      .where("menu.parentId IS NULL")
      .orderBy("menu.sort")
        .addOrderBy("parent.sort")
      .getMany();
  }

}
