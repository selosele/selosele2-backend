import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostCategoryEntity } from './post-category.entity';

@Entity('category')
export class CategoryEntity extends BaseEntity {

  /** 카테고리 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '카테고리 ID' })
  id?: number;

  /** 카테고리 명 */
  @Column()
  @ApiProperty({ description: '카테고리 명' })
  nm?: string;

  /** 카테고리 설명 */
  @Column()
  @ApiProperty({ description: '카테고리 설명' })
  desc?: string;

  /** 카테고리 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '카테고리 등록일시' })
  regDate?: Date;

  /** 카테고리 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '카테고리 수정일시' })
  modDate?: Date;

  /** 포스트 카테고리 */
  @OneToMany(() => PostCategoryEntity, (postCategory) => postCategory.category)
  @JoinColumn({ referencedColumnName: 'category_id' })
  @ApiProperty({ description: '포스트 카테고리' })
  postCategory?: PostCategoryEntity[];
  
}
