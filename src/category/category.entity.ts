import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostCategory } from './post-category.entity';

@Entity('category')
export class Category extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: 'id'
  })
  id?: string;

  @Column({
    comment: '카테고리 명'
  })
  @ApiProperty({
    description: '카테고리 명'
  })
  nm?: string;

  @CreateDateColumn({
    comment: '카테고리 등록일시'
  })
  @ApiProperty({
    description: '카테고리 등록일시'
  })
  regDate?: Date;

  @OneToMany(() => PostCategory, postCategory => postCategory.category)
  @JoinColumn({ referencedColumnName: 'post_id' })
  @ApiProperty({
    description: '포스트 카테고리'
  })
  postCategory?: PostCategory[];
  
}
