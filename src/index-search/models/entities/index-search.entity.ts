import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('index_search')
export class IndexSearchEntity extends BaseEntity {

  /** 색인 데이터 ID */
  @PrimaryColumn()
  @ApiProperty({ description: '색인 데이터 ID' })
  id?: number;

  /** 색인 연결 데이터 ID */
  @Column()
  @ApiProperty({ description: '색인 연결 데이터 ID' })
  cnncId?: number;

  /** 색인 연결 데이터 등록연도 */
  @Column()
  @ApiProperty({ description: '색인 연결 데이터 등록연도' })
  cnncRegYear?: string;

  /** 색인 연결 데이터 등록일시 */
  @Column()
  @ApiProperty({ description: '색인 연결 데이터 등록일시' })
  cnncRegDate?: Date;

  /** 색인 데이터 제목 */
  @Column()
  @ApiProperty({ description: '색인 데이터 제목' })
  title?: string;

  /** 색인 데이터 내용 */
  @Column()
  @ApiProperty({ description: '색인 데이터 내용' })
  cont?: string;

  /** 색인 데이터 대표 이미지 URL */
  @Column()
  @ApiProperty({ description: '색인 데이터 대표 이미지 URL' })
  ogImgUrl?: string;

  /** 색인 데이터 비공개 여부 */
  @Column()
  @ApiProperty({ description: '색인 데이터 비공개 여부' })
  secretYn?: string;

  /** 색인 데이터 상단고정 여부 */
  @Column()
  @ApiProperty({ description: '색인 데이터 상단고정 여부' })
  pinYn?: string;

  /** 색인 데이터 추천 수 */
  @Column()
  @ApiProperty({ description: '색인 데이터 추천 수' })
  likeCnt?: number;

  /** 색인 데이터 댓글 수 */
  @Column()
  @ApiProperty({ description: '색인 데이터 댓글 수' })
  replyCnt?: number;

  /** 색인 데이터 카테고리 정보 */
  @Column()
  @ApiProperty({ description: '색인 데이터 카테고리 정보' })
  category?: string;

  /** 색인 데이터 태그 정보 */
  @Column()
  @ApiProperty({ description: '색인 데이터 태그 정보' })
  tag?: string;

  /** 색인 데이터 유형 코드 */
  @Column()
  @ApiProperty({ description: '색인 데이터 유형 코드' })
  typeCd?: string;

  /** 색인 데이터 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '색인 데이터 등록일시' })
  regDate?: Date;
  
}
