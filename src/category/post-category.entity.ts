import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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
  
}
