import { Controller, Get, ParseIntPipe, Query, UseGuards, ValidationPipe, Delete } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { Post, Put } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Builder } from 'builder-pattern';
import { RoleEnum } from 'src/auth/entities/role.entity';
import { IsAuthenticated } from 'src/shared/decorators/auth/is-authenticated.decorator';
import { Roles } from 'src/shared/decorators/auth/roles.decorator';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { ListMenuDto } from './dto/list-menu.dto';
import { SaveMenuDto } from './dto/save-menu.dto';
import { MenuEntity } from './entities/menu.entity';
import { MenuService } from './menu.service';

@Controller('api/menu')
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
    type: MenuEntity,
    description: '계층형 메뉴 목록을 조회한다(최대 2depth).',
  })
  @ApiQuery({
    type: ListMenuDto,
    name: 'listMenuDto',
    description: '메뉴 목록 조회 DTO',
  })
  listTreeMenu(
    @IsAuthenticated() isAuthenticated: boolean,
    @Query(ValidationPipe) listMenuDto: ListMenuDto,
  ): Promise<MenuEntity[]> {
    const dto: ListMenuDto = Builder(ListMenuDto)
      .useYn(listMenuDto?.useYn)
      .roleIds(isAuthenticated ? [RoleEnum.ROLE_ADMIN] : [RoleEnum.ROLE_ANONYMOUS])
      .build();
    return this.menuService.listTreeMenu(dto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '메뉴 조회 API',
    description: '메뉴를 조회한다.',
  })
  @ApiCreatedResponse({
    type: MenuEntity,
    description: '메뉴를 조회한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '메뉴 ID',
  })
  getMenu(@Param('id', ParseIntPipe) id: number): Promise<MenuEntity> {
    return this.menuService.getMenu(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '메뉴 추가 API',
    description: '메뉴를 추가한다.',
  })
  @ApiCreatedResponse({
    type: MenuEntity,
    description: '메뉴를 추가한다.',
  })
  @ApiBody({
    type: SaveMenuDto,
    description: '메뉴 추가/수정/삭제 DTO',
  })
  addCategory(@Body(ValidationPipe) saveMenuDto: SaveMenuDto): Promise<MenuEntity> {
    return this.menuService.saveMenu(saveMenuDto);
  }

  @Put()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '메뉴 수정 API',
    description: '메뉴를 수정한다.',
  })
  @ApiCreatedResponse({
    type: MenuEntity,
    description: '메뉴를 수정한다.',
  })
  @ApiBody({
    type: SaveMenuDto,
    description: '메뉴 추가/수정/삭제 DTO',
  })
  updateMenu(@Body(ValidationPipe) saveMenuDto: SaveMenuDto): Promise<MenuEntity> {
    return this.menuService.saveMenu(saveMenuDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '메뉴 삭제 API',
    description: '메뉴를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: MenuEntity,
    description: '메뉴를 삭제한다.',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '메뉴 ID',
  })
  removeMenu(@Param('id', ParseIntPipe) id: number): Promise<MenuEntity> {
    return this.menuService.removeMenu(
      Builder(MenuEntity)
        .id(id)
        .build()
    );
  }

}
