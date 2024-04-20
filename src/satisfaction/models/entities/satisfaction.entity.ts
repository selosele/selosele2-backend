import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('satisfaction')
export class SatisfactionEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '만족도 ID' })
  id?: number;

  @Column({ comment: '페이지 URL' })
  @ApiProperty({ description: '페이지 URL' })
  pagePath?: string;

  @Column({ comment: '만족도 점수' })
  @ApiProperty({ description: '만족도 점수' })
  score?: string;

  @Column({ comment: '만족도 의견' })
  @ApiProperty({ description: '만족도 의견' })
  comment?: string;

  @Column({ comment: '만족도 의견 유형 코드' })
  @ApiProperty({ description: '만족도 의견 유형 코드' })
  commentTypeCd?: string;

  @Column({ comment: '참여자 IP', select: false })
  @ApiProperty({ description: '참여자 IP' })
  ip?: string;

  @CreateDateColumn({ comment: '참여일시' })
  @ApiProperty({ description: '참여일시' })
  regDate?: Date;
  
}
