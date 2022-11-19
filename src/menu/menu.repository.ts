import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { ListMenuDto } from './dto/list-menu.dto';
import { Menu } from './menu.entity';

@CustomRepository(Menu)
export class MenuRepository extends Repository<Menu> {

  // 메뉴 목록을 조회한다.
  async listMenu(listMenuDto: ListMenuDto): Promise<Menu[]> {
    return await this.createQueryBuilder('menu')
      .leftJoinAndSelect("menu.children", "parent")
      .innerJoin("menu.menuRole", "menuRole", "menuRole.menu_id = menu.id")
      .where("menu.parentId IS NULL")
        .andWhere("menuRole.role_id IN (:roleId)", { roleId: listMenuDto?.roleId })
      .orderBy("menu.sort")
        .addOrderBy("parent.sort")
      .getMany();
  }

}
