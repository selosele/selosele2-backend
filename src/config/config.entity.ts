import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'config' })
export class Config extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'id'
  })
  id?: number;

  @Column({
    comment: '블로그 제목'
  })
  @ApiProperty({
    description: '블로그 제목'
  })
  title?: string;

  @Column({
    comment: '블로거 닉네임'
  })
  @ApiProperty({
    description: '블로거 닉네임'
  })
  author?: string;

  @Column({
    comment: '블로그 소개'
  })
  @ApiProperty({
    description: '블로그 소개'
  })
  description?: string;

  @Column({
    comment: '블로그 아바타 이미지'
  })
  @ApiProperty({
    description: '블로그 아바타 이미지'
  })
  avatarImg?: string;

  @Column({
    comment: '블로그 아바타 이미지 URL'
  })
  @ApiProperty({
    description: '블로그 아바타 이미지 URL'
  })
  avatarImgUrl?: string;

  @Column({
    comment: '블로그 아바타 이미지 용량'
  })
  @ApiProperty({
    description: '블로그 아바타 이미지 용량'
  })
  avatarImgSize?: string;

  @Column({
    comment: '블로그 대표 이미지'
  })
  @ApiProperty({
    description: '블로그 대표 이미지'
  })
  ogImg?: string;

  @Column({
    comment: '블로그 대표 이미지 URL'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 URL'
  })
  ogImgUrl?: string;

  @Column({
    comment: '블로그 대표 이미지 용량'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 용량'
  })
  ogImgSize?: number;

  @Column({
    comment: '블로그 대표 이미지 밝기'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 밝기'
  })
  ogImgContrast?: number;

  @Column({
    comment: '블로그 대표 이미지 흐림'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 흐림'
  })
  ogImgBlur?: number;

  @Column({
    comment: '블로그 대표 이미지 가로 위치값'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 가로 위치값'
  })
  ogImgPosX?: number;

  @Column({
    comment: '블로그 대표 이미지 세로 위치값'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 세로 위치값'
  })
  ogImgPosY?: number;

  @Column({
    comment: '메인 포스트 목록 출력 개수'
  })
  @ApiProperty({
    description: '메인 포스트 목록 출력 개수'
  })
  pageSize?: number;

  @Column({
    comment: '만족도조사 표출 여부'
  })
  @ApiProperty({
    description: '만족도조사 표출 여부'
  })
  showSatisYn?: string;
  
}
