import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Menu } from './menu.entity';
import { MenuService } from './menu.service';

@Controller('api/menu')
@ApiTags('메뉴 API')
export class MenuController {

  constructor(
    private readonly menuService: MenuService,
  ) {}

  @Get('list')
  @ApiOperation({
    summary: '메뉴 목록 조회 API',
    description: '메뉴 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Menu,
    description: '메뉴 목록을 조회한다.',
  })
  listMenu(): Promise<Menu[]> {
    return this.menuService.listMenu();
  }

}
