import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('recommend_search_keyword')
export class RecommendSearchKeywordEntity extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({ description: '추천 검색어 ID' })
  id?: number;

  @Column({ comment: '추천 검색어' })
  @ApiProperty({ description: '추천 검색어' })
  keyword?: string;

  @CreateDateColumn({ comment: '추천 검색어 등록일시' })
  @ApiProperty({ description: '추천 검색어 등록일시' })
  regDate?: Date;
  
}
