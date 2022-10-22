import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('post_tag')
export class PostTag extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: '포스트 ID'
  })
  postId?: number;

  @PrimaryColumn()
  @ApiProperty({
    description: '태그 ID'
  })
  tagId?: number;
  
}
