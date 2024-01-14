import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { isNotEmpty } from '@/shared/utils';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ListMenuDto, SaveMenuDto, UpdateContentMenuDto, MenuEntity } from '../models';

@CustomRepository(MenuEntity)
export class MenuRepository extends Repository<MenuEntity> {

  /** 계층형 메뉴 목록을 조회한다(최대 2depth). */
  async listTreeMenu(listMenuDto?: ListMenuDto): Promise<MenuEntity[]> {

    /** 하위 메뉴 join 조건과 파라미터를 동적으로 생성한다. */
    const getConditionAndParameters = (): any[] => {
      if (isNotEmpty(listMenuDto.useYn)) {
        return ["parent.use_yn = :use_yn", { use_yn: listMenuDto.useYn }];
      } else {
        return ["", ""];
      }
    };

    let query = this.createQueryBuilder('menu')
      .leftJoinAndSelect("menu.children", "parent", getConditionAndParameters()[0], getConditionAndParameters()[1])
      .innerJoin("menu.menuRole", "menuRole")
      .where("1=1");

      if (isNotEmpty(listMenuDto.useYn)) {
        query = query
          .andWhere("menu.use_yn = :use_yn", { use_yn: listMenuDto.useYn })
      }

      query = query
        .andWhere("menu.parent_id IS NULL");

      if ('N' === listMenuDto.isLogin) {
        query = query
          .andWhere("menuRole.role_id IN (:role_id)", { role_id: listMenuDto?.roleIds });
      }
      
      query = query
        .orderBy("menu.sort")
        .addOrderBy("parent.sort");

    return await query.getMany();
  }

  /** 메뉴를 조회한다. */
  async getMenu(id: number): Promise<MenuEntity> {
    return await this.findOne({
      relations: ['menuRole'],
      where: { id },
    });
  }

  /** 메뉴를 등록/수정한다. */
  async saveMenu(saveMenuDto: SaveMenuDto): Promise<MenuEntity> {
    return await this.save(saveMenuDto)
  }

  /** 메뉴를 삭제한다. */
  async removeMenu(id: number): Promise<DeleteResult> {
    return await this.delete(id);
  }

  /** 콘텐츠 연결메뉴를 수정한다. */
  async updateContentMenu(updateContentMenuDto: UpdateContentMenuDto): Promise<UpdateResult> {
    return await this.createQueryBuilder('menu')
      .update()
      .set({
        name: updateContentMenuDto.name,
      })
      .where({
        link: updateContentMenuDto.link,
      })
      .execute();
  }

}
