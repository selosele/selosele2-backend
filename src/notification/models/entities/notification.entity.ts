import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('notification')
export class NotificationEntity extends BaseEntity {

  /** 알림 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '알림 ID' })
  id?: number;

  /** 알림 연결 ID */
  @Column()
  @ApiProperty({ description: '알림 연결 ID' })
  cnncId?: number;

  /** 알림 유형 코드 */
  @Column()
  @ApiProperty({ description: '알림 유형 코드' })
  typeCd?: string;

  /** 알림 링크 */
  @Column()
  @ApiProperty({ description: '알림 링크' })
  link?: string;

  /** 알림 발신자 IP */
  @Column({ select: false })
  @ApiProperty({ description: '알림 발신자 IP' })
  senderIp?: string;

  /** 알림 발신자 명 */
  @Column()
  @ApiProperty({ description: '알림 발신자 명' })
  senderNm?: string;

  /** 알림 제목 */
  @Column()
  @ApiProperty({ description: '알림 제목' })
  title?: string;

  /** 알림 확인 여부 */
  @Column()
  @ApiProperty({ description: '알림 확인 여부' })
  checkYn?: string;

  /** 알림 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '알림 등록일시' })
  regDate?: Date;

  /** 알림 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '알림 수정일시' })
  modDate?: Date;
  
}
