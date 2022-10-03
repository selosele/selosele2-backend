import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('post')
export class Post extends BaseEntity {

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
    comment: '포스트 작성일자'
  })
  @ApiProperty({
    description: '포스트 작성일자'
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '포스트 수정일자'
  })
  @ApiProperty({
    description: '포스트 수정일자'
  })
  modDate?: Date;

  @Column({
    comment: '포스트 추천수'
  })
  @ApiProperty({
    description: '포스트 추천수'
  })
  likeCnt?: number;

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
  
  @Column({
    comment: '포스트 내용의 순수 텍스트'
  })
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
  
}
