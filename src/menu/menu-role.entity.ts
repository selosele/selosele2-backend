import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MenuEntity } from './menu.entity';

@Entity('menu_role')
export class MenuRoleEntity extends BaseEntity {

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

  @ManyToOne(() => MenuEntity, menu => menu.menuRole)
  @JoinColumn({ name: 'menu_id' })
  @ApiProperty({
    description: '메뉴'
  })
  menu?: MenuEntity;
  
}
