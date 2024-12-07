import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostEntity } from './post.entity';

@Entity('post_like')
export class PostLikeEntity extends BaseEntity {

  /** 포스트 추천 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '포스트 추천 ID' })
  id?: number;

  /** 포스트 ID */
  @Column()
  @ApiProperty({ description: '포스트 ID' })
  postId?: number;

  /** 포스트 추천자 IP */
  @Column()
  @ApiProperty({ description: '포스트 추천자 IP' })
  ip?: string;

  /** 포스트 추천일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '포스트 추천일시' })
  regDate?: Date;

  /** 포스트 */
  @ManyToOne(() => PostEntity, (post) => post.postLike)
  @JoinColumn({ name: 'post_id' })
  @ApiProperty({ type: () => PostEntity, description: '포스트' })
  post?: PostEntity;
  
}
