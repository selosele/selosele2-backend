import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'posts' })
export class Posts extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'id'
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
    comment: '포스트 작성일'
  })
  @ApiProperty({
    description: '포스트 작성일'
  })
  create_at?: Date;

  @UpdateDateColumn({
    comment: '포스트 수정일'
  })
  @ApiProperty({
    description: '포스트 수정일'
  })
  modified_at?: Date;

  @Column({
    comment: '포스트 추천수'
  })
  @ApiProperty({
    description: '포스트 추천수'
  })
  like_cnt?: number;

  @Column({
    comment: '포스트 댓글수'
  })
  @ApiProperty({
    description: '포스트 댓글수'
  })
  reply_cnt?: number;
  
  @Column({
    comment: '포스트 내용'
  })
  @ApiProperty({
    description: '포스트 내용'
  })
  cont?: string;
  
  @Column({
    comment: '포스트 내용의 순수 텍스트'
  })
  @ApiProperty({
    description: '포스트 내용의 순수 텍스트'
  })
  raw_text?: string;
  
  @Column({
    comment: '포스트 대표 이미지'
  })
  @ApiProperty({
    description: '포스트 대표 이미지'
  })
  og_image?: string;
  
  @Column({
    comment: '포스트 대표 이미지 URL'
  })
  @ApiProperty({
    description: '포스트 대표 이미지 URL'
  })
  og_image_url?: string;
  
  @Column({
    comment: '포스트 대표 이미지 파일 크기'
  })
  @ApiProperty({
    description: '포스트 대표 이미지 파일 크기'
  })
  og_image_size?: number;
  
  @Column({
    comment: '포스트 내용 요약'
  })
  @ApiProperty({
    description: '포스트 내용 요약'
  })
  og_description?: string;
  
  @Column({
    comment: '포스트 비공개 여부'
  })
  @ApiProperty({
    description: '포스트 비공개 여부'
  })
  secret?: string;
  
  @Column({
    comment: '포스트 상단고정 여부'
  })
  @ApiProperty({
    description: '포스트 상단고정 여부'
  })
  pin?: string;
  
}