import { Controller, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { RoleEnum } from 'src/auth/role.entity';
import { IsAuthenticated } from 'src/shared/decorator/auth/is-authenticated.decorator';
import { ListMenuDto } from './dto/list-menu.dto';
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
  listMenu(@IsAuthenticated() isAuthenticated: boolean): Promise<Menu[]> {
    const listMenuDto: ListMenuDto = Builder(ListMenuDto)
      .roleId(isAuthenticated ? [RoleEnum.ROLE_ADMIN] : [RoleEnum.ROLE_ANONYMOUS])
      .build();
    return this.menuService.listMenu(listMenuDto);
  }

}
