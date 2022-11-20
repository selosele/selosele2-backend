import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListMenuDto } from './dto/list-menu.dto';
import { MenuEntity } from './menu.entity';
import { MenuRepository } from './menu.repository';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(MenuRepository)
    private readonly menuRepository: MenuRepository,
  ) {}

  // 메뉴 목록을 조회한다.
  async listMenu(listMenuDto: ListMenuDto): Promise<MenuEntity[]> {
    return await this.menuRepository.listMenu(listMenuDto);
  }

}
