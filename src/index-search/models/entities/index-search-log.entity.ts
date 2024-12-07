import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('index_search_log')
export class IndexSearchLogEntity extends BaseEntity {

  /** 색인 로그 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '색인 로그 ID' })
  id?: number;

  /** 색인 데이터 유형 코드 */
  @Column()
  @ApiProperty({ description: '색인 데이터 유형 코드' })
  typeCd?: string;

  /** 자동 색인 여부 */
  @Column()
  @ApiProperty({ description: '자동 색인 여부' })
  autoYn?: string;

  /** 색인 데이터 댓글 수 */
  @Column()
  @ApiProperty({ description: '색인 데이터 댓글 수' })
  cnt?: number;

  /** 색인 시작일시 */
  @Column()
  @ApiProperty({ description: '색인 시작일시' })
  startDate?: Date;

  /** 색인 종료일시 */
  @Column()
  @ApiProperty({ description: '색인 종료일시' })
  endDate?: Date;

  /** 색인 로그 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '색인 로그 등록일시' })
  regDate?: Date;
  
}
