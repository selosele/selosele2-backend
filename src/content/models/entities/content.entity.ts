import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('content')
export class ContentEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '콘텐츠 ID',
  })
  id?: number;

  @Column({
    comment: '콘텐츠 링크',
  })
  @ApiProperty({
    description: '콘텐츠 링크',
  })
  link?: string;

  @Column({
    comment: '콘텐츠 제목',
  })
  @ApiProperty({
    description: '콘텐츠 제목',
  })
  title?: string;

  @CreateDateColumn({
    comment: '콘텐츠 등록일시'
  })
  @ApiProperty({
    description: '콘텐츠 등록일시'
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '콘텐츠 수정일시'
  })
  @ApiProperty({
    description: '콘텐츠 수정일시'
  })
  modDate?: Date;

  @Column({
    comment: '콘텐츠 내용'
  })
  @ApiProperty({
    description: '콘텐츠 내용'
  })
  cont?: string;

  @ApiProperty({
    description: '콘텐츠 내용의 순수 텍스트'
  })
  rawText?: string;

  @Column({
    comment: '콘텐츠 대표 이미지'
  })
  @ApiProperty({
    description: '콘텐츠 대표 이미지'
  })
  ogImg?: string;
  
  @Column({
    comment: '콘텐츠 대표 이미지 URL'
  })
  @ApiProperty({
    description: '콘텐츠 대표 이미지 URL'
  })
  ogImgUrl?: string;
  
  @Column({
    comment: '콘텐츠 대표 이미지 용량'
  })
  @ApiProperty({
    description: '콘텐츠 대표 이미지 용량'
  })
  ogImgSize?: number;

  @Column({
    comment: '콘텐츠 내용 요약'
  })
  @ApiProperty({
    description: '콘텐츠 내용 요약'
  })
  ogDesc?: string;

  @Column({
    comment: '콘텐츠 임시저장 여부'
  })
  @ApiProperty({
    description: '콘텐츠 임시저장 여부'
  })
  tmpYn?: string;
  
}
