import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('notification')
export class NotificationEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '알림 ID' })
  id?: number;

  @Column({ comment: '알림 연결 ID' })
  @ApiProperty({ description: '알림 연결 ID' })
  cnncId?: number;

  @Column({ comment: '알림 유형 코드' })
  @ApiProperty({ description: '알림 유형 코드' })
  typeCd?: string;

  @Column({ comment: '알림 링크' })
  @ApiProperty({ description: '알림 링크' })
  link?: string;

  @Column({ comment: '알림 발신자 IP', select: false })
  @ApiProperty({ description: '알림 발신자 IP' })
  senderIp?: string;

  @Column({ comment: '알림 발신자 명' })
  @ApiProperty({ description: '알림 발신자 명' })
  senderNm?: string;

  @Column({ comment: '알림 제목' })
  @ApiProperty({ description: '알림 제목' })
  title?: string;

  @Column({ comment: '알림 확인 여부' })
  @ApiProperty({ description: '알림 확인 여부' })
  checkYn?: string;

  @CreateDateColumn({ comment: '알림 등록일시' })
  @ApiProperty({ description: '알림 등록일시' })
  regDate?: Date;

  @UpdateDateColumn({ comment: '알림 수정일시' })
  @ApiProperty({ description: '알림 수정일시' })
  modDate?: Date;
  
}
