import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostCategoryEntity } from 'src/category/models';
import { PostTagEntity } from 'src/tag/models';
import { PostLikeEntity } from './post-like.entity';

@Entity('post')
export class PostEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '포스트 ID'
  })
  id?: number;

  @Column({
    comment: '포스트 제목'
  })
  @ApiProperty({
    description: '포스트 제목'
  })
  title?: string;

  @CreateDateColumn({
    comment: '포스트 작성일시'
  })
  @ApiProperty({
    description: '포스트 작성일시'
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '포스트 수정일시'
  })
  @ApiProperty({
    description: '포스트 수정일시'
  })
  modDate?: Date;

  @Column({
    comment: '포스트 댓글수'
  })
  @ApiProperty({
    description: '포스트 댓글수'
  })
  replyCnt?: number;
  
  @Column({
    comment: '포스트 내용'
  })
  @ApiProperty({
    description: '포스트 내용'
  })
  cont?: string;
  
  @ApiProperty({
    description: '포스트 내용의 순수 텍스트'
  })
  rawText?: string;
  
  @Column({
    comment: '포스트 대표 이미지'
  })
  @ApiProperty({
    description: '포스트 대표 이미지'
  })
  ogImg?: string;
  
  @Column({
    comment: '포스트 대표 이미지 URL'
  })
  @ApiProperty({
    description: '포스트 대표 이미지 URL'
  })
  ogImgUrl?: string;
  
  @Column({
    comment: '포스트 대표 이미지 파일 크기'
  })
  @ApiProperty({
    description: '포스트 대표 이미지 파일 크기'
  })
  ogImgSize?: number;
  
  @Column({
    comment: '포스트 내용 요약'
  })
  @ApiProperty({
    description: '포스트 내용 요약'
  })
  ogDesc?: string;
  
  @Column({
    comment: '포스트 비공개 여부'
  })
  @ApiProperty({
    description: '포스트 비공개 여부'
  })
  secretYn?: string;
  
  @Column({
    comment: '포스트 상단고정 여부'
  })
  @ApiProperty({
    description: '포스트 상단고정 여부'
  })
  pinYn?: string;

  @Column({
    comment: '포스트 임시저장 여부'
  })
  @ApiProperty({
    description: '포스트 임시저장 여부'
  })
  tmpYn?: string;

  @OneToMany(() => PostCategoryEntity, postCategory => postCategory.post)
  @JoinColumn({ referencedColumnName: 'post_id' })
  @ApiProperty({
    description: '포스트 카테고리'
  })
  postCategory?: PostCategoryEntity[];

  @OneToMany(() => PostTagEntity, postTag => postTag.post)
  @JoinColumn({ referencedColumnName: 'post_id' })
  @ApiProperty({
    description: '포스트 태그'
  })
  postTag?: PostTagEntity[];

  @OneToMany(() => PostLikeEntity, postLike => postLike.post)
  @JoinColumn({ referencedColumnName: 'post_id' })
  @ApiProperty({
    description: '포스트 추천'
  })
  postLike?: PostLikeEntity[];
  
}
