import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MenuRoleEntity } from './menu-role.entity';

@Entity('menu')
export class MenuEntity extends BaseEntity {

  /** 메뉴 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '메뉴 ID' })
  id?: number;

  /** 상위 메뉴 ID */
  @Column()
  @ApiProperty({ description: '상위 메뉴 ID' })
  parentId?: number;

  /** 메뉴명 */
  @Column()
  @ApiProperty({ description: '메뉴명' })
  name?: string;

  /** 메뉴 링크 */
  @Column()
  @ApiProperty({ description: '메뉴 링크' })
  link?: string;

  /** 메뉴 정렬 순서 */
  @Column()
  @ApiProperty({ description: '메뉴 정렬 순서' })
  sort?: number;

  /** 메뉴 계층 */
  @Column()
  @ApiProperty({ description: '메뉴 계층' })
  depth?: number;

  /** 메뉴 사용 여부 */
  @Column()
  @ApiProperty({ description: '메뉴 사용 여부' })
  useYn?: string;

  /** 메뉴 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '메뉴 등록일시' })
  regDate?: Date;

  /** 메뉴 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '메뉴 수정일시' })
  modDate?: Date;
  
  /** 상위 메뉴 */
  @ManyToOne(() => MenuEntity, (menu) => menu.children)
  @ApiProperty({ description: '상위 메뉴' })
  parent?: MenuEntity;

  /** 하위 메뉴 */
  @OneToMany(() => MenuEntity, (menu) => menu.parent)
  @ApiProperty({ description: '하위 메뉴' })
  children?: MenuEntity[];

  /** 메뉴 권한 */
  @OneToMany(() => MenuRoleEntity, (menuRole) => menuRole.menu)
  @JoinColumn({ referencedColumnName: 'id' })
  @ApiProperty({ description: '메뉴 권한' })
  menuRole?: MenuRoleEntity[];
  
}
