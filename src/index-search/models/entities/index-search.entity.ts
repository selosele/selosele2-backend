import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('index_search')
export class IndexSearchEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '검색 데이터 ID'
  })
  id?: number;

  @Column({
    comment: '검색 연결 데이터 ID'
  })
  @ApiProperty({
    description: '검색 연결 데이터 ID'
  })
  cnncId?: number;

  @Column({
    comment: '검색 연결 데이터 등록일시'
  })
  @ApiProperty({
    description: '검색 연결 데이터 등록일시'
  })
  cnncRegDate?: Date;

  @Column({
    comment: '검색 데이터 제목'
  })
  @ApiProperty({
    description: '검색 데이터 제목'
  })
  title?: string;

  @Column({
    comment: '검색 데이터 내용'
  })
  @ApiProperty({
    description: '검색 데이터 내용'
  })
  cont?: string;

  @Column({
    comment: '검색 데이터 대표 이미지 URL'
  })
  @ApiProperty({
    description: '검색 데이터 대표 이미지 URL'
  })
  ogImgUrl?: string;

  @Column({
    comment: '검색 데이터 비공개 여부'
  })
  @ApiProperty({
    description: '검색 데이터 비공개 여부'
  })
  secretYn?: string;

  @Column({
    comment: '검색 데이터 상단고정 여부'
  })
  @ApiProperty({
    description: '검색 데이터 상단고정 여부'
  })
  pinYn?: string;

  @Column({
    comment: '검색 데이터 추천 수'
  })
  @ApiProperty({
    description: '검색 데이터 추천 수'
  })
  likeCnt?: number;

  @Column({
    comment: '검색 데이터 댓글 수'
  })
  @ApiProperty({
    description: '검색 데이터 댓글 수'
  })
  replyCnt?: number;

  @Column({
    comment: '검색 데이터 카테고리 정보'
  })
  @ApiProperty({
    description: '검색 데이터 카테고리 정보'
  })
  category?: string;

  @Column({
    comment: '검색 데이터 태그 정보'
  })
  @ApiProperty({
    description: '검색 데이터 태그 정보'
  })
  tag?: string;

  @Column({
    comment: '검색 데이터 유형 코드'
  })
  @ApiProperty({
    description: '검색 데이터 유형 코드'
  })
  typeCd?: string;

  @CreateDateColumn({
    comment: '검색 데이터 등록일시'
  })
  @ApiProperty({
    description: '검색 데이터 등록일시'
  })
  regDate?: Date;
  
}
