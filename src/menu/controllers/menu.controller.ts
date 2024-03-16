import { Controller, Get, ParseIntPipe, Query, ValidationPipe, Delete } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Roles } from '@/auth/models';
import { Auth, IsAuthenticated } from '@/shared/decorators';
import { DeleteResult } from 'typeorm';
import { ListMenuDto, SaveMenuDto, MenuEntity, MenuDto } from '../models';
import { MenuService } from '../services/menu.service';
import { serialize } from '@/shared/utils';

@Controller('menu')
@ApiTags('메뉴 API')
export class MenuController {

  constructor(
    private readonly menuService: MenuService,
  ) {}

  @Get('list/tree')
  @ApiOperation({
    summary: '계층형 메뉴 목록 조회 API',
    description: '계층형 메뉴 목록을 조회한다(최대 2depth).',
  })
  @ApiCreatedResponse({
    type: Array<MenuDto>,
    description: '메뉴 DTO 목록',
  })
  @ApiQuery({
    type: ListMenuDto,
    name: 'listMenuDto',
    description: '메뉴 목록 조회 DTO',
  })
  async listTreeMenu(
    @IsAuthenticated() isAuthenticated: boolean,
    @Query(ValidationPipe) listMenuDto: ListMenuDto,
  ): Promise<MenuDto[]> {
    const dto: ListMenuDto = {};
    dto.useYn = listMenuDto?.useYn;
    dto.isLogin = isAuthenticated ? 'Y' : 'N';
    dto.roleIds = isAuthenticated ? [Roles.ROLE_ADMIN] : [Roles.ROLE_ANONYMOUS];

    const menus: MenuEntity[] = await this.menuService.listTreeMenu(dto);

    return serialize<MenuDto[]>(menus);
  }

  @Get(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '메뉴 조회 API',
    description: '메뉴를 조회한다.',
  })
  @ApiCreatedResponse({
    type: MenuDto,
    description: '메뉴 DTO',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '메뉴 ID',
  })
  async getMenu(
    @Param('id', ParseIntPipe) id: number
  ): Promise<MenuDto> {
    const menu: MenuEntity = await this.menuService.getMenu(id);

    return serialize<MenuDto>(menu);
  }

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '메뉴 등록 API',
    description: '메뉴를 등록한다.',
  })
  @ApiCreatedResponse({
    type: MenuDto,
    description: '메뉴 DTO',
  })
  @ApiBody({
    type: SaveMenuDto,
    description: '메뉴 등록/수정/삭제 DTO',
  })
  async addCategory(
    @Body(ValidationPipe) saveMenuDto: SaveMenuDto
  ): Promise<MenuDto> {
    const menu: MenuEntity = await this.menuService.saveMenu(saveMenuDto);

    return serialize<MenuDto>(menu);
  }

  @Put()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '메뉴 수정 API',
    description: '메뉴를 수정한다.',
  })
  @ApiCreatedResponse({
    type: MenuDto,
    description: '메뉴 DTO',
  })
  @ApiBody({
    type: SaveMenuDto,
    description: '메뉴 등록/수정/삭제 DTO',
  })
  async updateMenu(
    @Body(ValidationPipe) saveMenuDto: SaveMenuDto
  ): Promise<MenuDto> {
    const menu: MenuEntity = await this.menuService.saveMenu(saveMenuDto);
    
    return serialize<MenuDto>(menu);
  }

  @Delete(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '메뉴 삭제 API',
    description: '메뉴를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '메뉴 삭제 정보',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '메뉴 ID',
  })
  async removeMenu(
    @Param('id', ParseIntPipe) id: number
  ): Promise<DeleteResult> {
    return await this.menuService.removeMenu(id);
  }

}
