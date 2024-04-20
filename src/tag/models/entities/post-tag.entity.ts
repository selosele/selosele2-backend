import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostEntity } from '@/post/models';
import { TagEntity } from './tag.entity';

@Entity('post_tag')
export class PostTagEntity extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({ description: '포스트 ID' })
  postId?: number;

  @PrimaryColumn()
  @ApiProperty({ description: '태그 ID' })
  tagId?: number;

  @ManyToOne(() => PostEntity, (post) => post.postTag)
  @JoinColumn({ name: 'post_id' })
  @ApiProperty({ description: '포스트' })
  post?: PostEntity;

  @ManyToOne(() => TagEntity, (tag) => tag.postTag)
  @JoinColumn({ name: 'tag_id' })
  @ApiProperty({ description: '태그' })
  tag?: TagEntity;
  
}
