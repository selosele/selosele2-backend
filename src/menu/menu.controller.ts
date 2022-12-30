import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { RoleEnum } from 'src/auth/entities/role.entity';
import { IsAuthenticated } from 'src/shared/decorator/auth/is-authenticated.decorator';
import { ListMenuDto } from './dto/list-menu.dto';
import { MenuEntity } from './entities/menu.entity';
import { MenuService } from './menu.service';

@Controller('api/menu')
@ApiTags('메뉴 API')
export class MenuController {

  constructor(
    private readonly menuService: MenuService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '메뉴 목록 조회 API',
    description: '메뉴 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: MenuEntity,
    description: '메뉴 목록을 조회한다.',
  })
  @ApiQuery({
    type: ListMenuDto,
    name: 'listMenuDto',
    description: '메뉴 목록 조회 DTO',
  })
  listMenu(
    @IsAuthenticated() isAuthenticated: boolean,
    @Query(ValidationPipe) listMenuDto: ListMenuDto,
  ): Promise<MenuEntity[]> {
    const dto: ListMenuDto = Builder(ListMenuDto)
      .useYn(listMenuDto?.useYn)
      .roleIds(isAuthenticated ? [RoleEnum.ROLE_ADMIN] : [RoleEnum.ROLE_ANONYMOUS])
      .build();
    return this.menuService.listMenu(dto);
  }

}
