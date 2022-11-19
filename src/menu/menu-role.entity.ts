import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Menu } from './menu.entity';

@Entity('menu_role')
export class MenuRole extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: '메뉴 ID'
  })
  menuId?: number;

  @PrimaryColumn()
  @ApiProperty({
    description: '권한 ID'
  })
  roleId?: string;

  @ManyToOne(() => Menu, menu => menu.menuRole)
  @JoinColumn({ name: 'menu_id' })
  @ApiProperty({
    description: '메뉴'
  })
  menu?: Menu;
  
}
