import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Post } from 'src/post/post.entity';
import { Category } from './category.entity';

@Entity('post_category')
export class PostCategory extends BaseEntity {

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

  @ManyToOne(() => Post, post => post.postCategory)
  @JoinColumn({ name: 'post_id' })
  @ApiProperty({
    description: '포스트'
  })
  post?: Post;

  @ManyToOne(() => Category, category => category.postCategory)
  @JoinColumn({ name: 'category_id' })
  @ApiProperty({
    description: '카테고리'
  })
  category?: Category;
  
}
