import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostEntity } from './post.entity';

@Entity('post_like')
export class PostLikeEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '포스트 추천 ID' })
  id?: number;

  @Column({ comment: '포스트 ID' })
  @ApiProperty({ description: '포스트 ID' })
  postId?: number;

  @Column({ comment: '포스트 추천자 IP' })
  @ApiProperty({ description: '포스트 추천자 IP' })
  ip?: string;

  @CreateDateColumn({ comment: '포스트 추천일시' })
  @ApiProperty({ description: '포스트 추천일시' })
  regDate?: Date;

  @ManyToOne(() => PostEntity, (post) => post.postLike)
  @JoinColumn({ name: 'post_id' })
  @ApiProperty({ type: () => PostEntity, description: '포스트' })
  post?: PostEntity;
  
}
