import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('index_search_log')
export class IndexSearchLogEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '색인 로그 ID'
  })
  id?: number;

  @Column({
    comment: '검색 데이터 유형 코드'
  })
  @ApiProperty({
    description: '검색 데이터 유형 코드'
  })
  typeCd?: string;

  @Column({
    comment: '검색 데이터 댓글 수'
  })
  @ApiProperty({
    description: '검색 데이터 댓글 수'
  })
  cnt?: number;

  @Column({
    comment: '색인 시작일시'
  })
  @ApiProperty({
    description: '색인 시작일시'
  })
  startDate?: Date;

  @Column({
    comment: '색인 종료일시'
  })
  @ApiProperty({
    description: '색인 종료일시'
  })
  endDate?: Date;

  @CreateDateColumn({
    comment: '색인 로그 등록일시'
  })
  @ApiProperty({
    description: '색인 로그 등록일시'
  })
  regDate?: Date;
  
}
