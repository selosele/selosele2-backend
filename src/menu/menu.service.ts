import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { MenuRepository } from './menu.repository';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(MenuRepository)
    private readonly menuRepository: MenuRepository,
  ) {}

  // 메뉴 목록을 조회한다.
  async listMenu(): Promise<Menu[]> {
    return await this.menuRepository.listMenu();
  }

}
