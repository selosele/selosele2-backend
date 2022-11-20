import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MenuRoleEntity } from './menu-role.entity';

@Entity('menu')
export class MenuEntity extends BaseEntity {

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
    comment: '하위 메뉴 존재 여부'
  })
  @ApiProperty({
    description: '하위 메뉴 존재 여부'
  })
  hasChildren?: string;

  @Column({
    comment: '메뉴 사용 여부'
  })
  @ApiProperty({
    description: '메뉴 사용 여부'
  })
  useYn?: string;
  
  @ManyToOne(() => MenuEntity, (menu) => menu.children)
  parent: MenuEntity;

  @OneToMany(() => MenuEntity, (menu) => menu.parent)
  children: MenuEntity[];

  @OneToMany(() => MenuRoleEntity, menuRole => menuRole.menu)
  @JoinColumn({ referencedColumnName: 'id' })
  @ApiProperty({
    description: '메뉴 권한'
  })
  menuRole?: MenuRoleEntity[];
  
}
