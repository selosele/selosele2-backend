import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MenuRole } from './menu-role.entity';

@Entity('menu')
export class Menu extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '메뉴 ID'
  })
  id?: number;

  @Column({
    comment: '상위 메뉴 ID'
  })
  @ApiProperty({
    description: '상위 메뉴 ID'
  })
  parentId?: number;

  @Column({
    comment: '메뉴명'
  })
  @ApiProperty({
    description: '메뉴명'
  })
  name?: string;

  @Column({
    comment: '메뉴 링크'
  })
  @ApiProperty({
    description: '메뉴 링크'
  })
  link?: string;

  @Column({
    comment: '메뉴 정렬 순서'
  })
  @ApiProperty({
    description: '메뉴 정렬 순서'
  })
  sort?: number;

  @Column({
    comment: '하위 메뉴 존재여부'
  })
  @ApiProperty({
    description: '하위 메뉴 존재여부'
  })
  hasChildren?: string;
  
  @ManyToOne(() => Menu, (menu) => menu.children)
  parent: Menu;

  @OneToMany(() => Menu, (menu) => menu.parent)
  children: Menu[];

  @OneToMany(() => MenuRole, menuRole => menuRole.menu)
  @JoinColumn({ referencedColumnName: 'id' })
  @ApiProperty({
    description: '메뉴 권한'
  })
  menuRole?: MenuRole[];
  
}
