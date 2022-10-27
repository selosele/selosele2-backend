import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Post } from 'src/post/post.entity';
import { Tag } from './tag.entity';

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

  @ManyToOne(() => Post, post => post.postTag)
  @JoinColumn({ name: 'post_id' })
  @ApiProperty({
    description: '포스트'
  })
  post?: Post;

  @ManyToOne(() => Tag, tag => tag.postTag)
  @JoinColumn({ name: 'tag_id' })
  @ApiProperty({
    description: '태그'
  })
  tag?: Tag;
  
}
