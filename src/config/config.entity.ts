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
  avatar_img?: string;

  @Column({
    comment: '블로그 아바타 이미지 URL'
  })
  @ApiProperty({
    description: '블로그 아바타 이미지 URL'
  })
  avatar_img_url?: string;

  @Column({
    comment: '블로그 아바타 이미지 용량'
  })
  @ApiProperty({
    description: '블로그 아바타 이미지 용량'
  })
  avatar_img_size?: string;

  @Column({
    comment: '블로그 대표 이미지'
  })
  @ApiProperty({
    description: '블로그 대표 이미지'
  })
  og_img?: string;

  @Column({
    comment: '블로그 대표 이미지 URL'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 URL'
  })
  og_img_url?: string;

  @Column({
    comment: '블로그 대표 이미지 용량'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 용량'
  })
  og_img_size?: number;

  @Column({
    comment: '블로그 대표 이미지 밝기'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 밝기'
  })
  og_img_contrast?: number;

  @Column({
    comment: '블로그 대표 이미지 흐림'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 흐림'
  })
  og_img_blur?: number;

  @Column({
    comment: '블로그 대표 이미지 가로 위치값'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 가로 위치값'
  })
  og_img_pos_x?: number;

  @Column({
    comment: '블로그 대표 이미지 세로 위치값'
  })
  @ApiProperty({
    description: '블로그 대표 이미지 세로 위치값'
  })
  og_img_pos_y?: number;

  @Column({
    comment: '메인 포스트 목록 출력 개수'
  })
  @ApiProperty({
    description: '메인 포스트 목록 출력 개수'
  })
  page_size?: number;

  @Column({
    comment: '만족도조사 표출 여부'
  })
  @ApiProperty({
    description: '만족도조사 표출 여부'
  })
  show_satis_yn?: string;
  
}
