import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('satisfaction')
export class SatisfactionEntity extends BaseEntity {

  /** 만족도 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '만족도 ID' })
  id?: number;

  /** 페이지 URL */
  @Column()
  @ApiProperty({ description: '페이지 URL' })
  pagePath?: string;

  /** 만족도 점수 */
  @Column()
  @ApiProperty({ description: '만족도 점수' })
  score?: string;

  /** 만족도 의견 */
  @Column()
  @ApiProperty({ description: '만족도 의견' })
  comment?: string;

  /** 만족도 의견 유형 코드 */
  @Column()
  @ApiProperty({ description: '만족도 의견 유형 코드' })
  commentTypeCd?: string;

  /** 참여자 IP */
  @Column({ select: false })
  @ApiProperty({ description: '참여자 IP' })
  ip?: string;

  /** 참여일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '참여일시' })
  regDate?: Date;
  
}
