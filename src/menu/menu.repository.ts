import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { ListMenuDto } from './dto/list-menu.dto';
import { MenuEntity } from './entities/menu.entity';

@CustomRepository(MenuEntity)
export class MenuRepository extends Repository<MenuEntity> {

  /** 메뉴 목록을 조회한다. */
  async listMenu(listMenuDto: ListMenuDto): Promise<MenuEntity[]> {
    return await this.createQueryBuilder('menu')
      .leftJoinAndSelect("menu.children", "parent")
      .innerJoin("menu.menuRole", "menuRole", "menuRole.menu_id = menu.id")
      .where("menu.use_yn = :use_yn", { use_yn: listMenuDto?.useYn })
        .andWhere("menu.parent_id IS NULL")
        .andWhere("menuRole.role_id IN (:role_id)", { role_id: listMenuDto?.roleIds })
      .orderBy("menu.sort")
        .addOrderBy("parent.sort")
      .getMany();
  }

}
