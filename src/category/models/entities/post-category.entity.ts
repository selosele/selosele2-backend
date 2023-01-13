import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostEntity } from 'src/post/models';
import { CategoryEntity } from './category.entity';

@Entity('post_category')
export class PostCategoryEntity extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: '포스트 ID'
  })
  postId?: number;

  @PrimaryColumn()
  @ApiProperty({
    description: '카테고리 ID'
  })
  categoryId?: number;

  @ManyToOne(() => PostEntity, post => post.postCategory)
  @JoinColumn({ name: 'post_id' })
  @ApiProperty({
    description: '포스트'
  })
  post?: PostEntity;

  @ManyToOne(() => CategoryEntity, category => category.postCategory)
  @JoinColumn({ name: 'category_id' })
  @ApiProperty({
    description: '카테고리'
  })
  category?: CategoryEntity;
  
}
