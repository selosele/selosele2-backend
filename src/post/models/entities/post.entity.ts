import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostCategoryEntity } from '@/category/models';
import { PostTagEntity } from '@/tag/models';
import { PostLikeEntity } from './post-like.entity';
import { PostReplyEntity } from './post-reply.entity';

@Entity('post')
export class PostEntity extends BaseEntity {

  /** 포스트 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '포스트 ID' })
  id?: number;

  /** 포스트 제목 */
  @Column()
  @ApiProperty({ description: '포스트 제목' })
  title?: string;

  /** 포스트 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '포스트 등록일시' })
  regDate?: Date;

  /** 포스트 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '포스트 수정일시' })
  modDate?: Date;

  /** 포스트 댓글 수 */
  @Column()
  @ApiProperty({ description: '포스트 댓글 수' })
  replyCnt?: number;
  
  /** 포스트 내용 */
  @Column()
  @ApiProperty({ description: '포스트 내용' })
  cont?: string;
  
  /** 포스트 대표 이미지 */
  @Column()
  @ApiProperty({ description: '포스트 대표 이미지' })
  ogImg?: string;
  
  /** 포스트 대표 이미지 URL */
  @Column()
  @ApiProperty({ description: '포스트 대표 이미지 URL' })
  ogImgUrl?: string;
  
  /** 포스트 대표 이미지 용량 */
  @Column()
  @ApiProperty({ description: '포스트 대표 이미지 용량' })
  ogImgSize?: number;
  
  /** 포스트 내용 요약 */
  @Column()
  @ApiProperty({ description: '포스트 내용 요약' })
  ogDesc?: string;
  
  /** 포스트 비공개 여부 */
  @Column()
  @ApiProperty({ description: '포스트 비공개 여부' })
  secretYn?: string;
  
  /** 포스트 상단고정 여부 */
  @Column()
  @ApiProperty({ description: '포스트 상단고정 여부' })
  pinYn?: string;

  /** 포스트 임시저장 여부 */
  @Column()
  @ApiProperty({ description: '포스트 임시저장 여부' })
  tmpYn?: string;

  /** 포스트 카테고리 */
  @OneToMany(() => PostCategoryEntity, (postCategory) => postCategory.post)
  @JoinColumn({ referencedColumnName: 'post_id' })
  @ApiProperty({ description: '포스트 카테고리' })
  postCategory?: PostCategoryEntity[];

  /** 포스트 태그 */
  @OneToMany(() => PostTagEntity, (postTag) => postTag.post)
  @JoinColumn({ referencedColumnName: 'post_id' })
  @ApiProperty({ description: '포스트 태그' })
  postTag?: PostTagEntity[];

  /** 포스트 추천 */
  @OneToMany(() => PostLikeEntity, (postLike) => postLike.post)
  @JoinColumn({ referencedColumnName: 'post_id' })
  @ApiProperty({ description: '포스트 추천' })
  postLike?: PostLikeEntity[];

  /** 포스트 댓글 */
  @OneToMany(() => PostReplyEntity, (postReply) => postReply.post)
  @JoinColumn({ referencedColumnName: 'id' })
  @ApiProperty({ description: '포스트 댓글' })
  postReply?: PostReplyEntity[];
  
}
