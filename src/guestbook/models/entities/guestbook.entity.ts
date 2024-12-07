import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GuestbookReplyEntity } from './guestbook-reply.entity';

@Entity('guestbook')
export class GuestbookEntity extends BaseEntity {

  /** 방명록 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '방명록 ID' })
  id?: number;

  /** 방명록 작성자 */
  @Column()
  @ApiProperty({ description: '방명록 작성자' })
  author?: string;

  /** 방명록 작성자 비밀번호 */
  @Column()
  @ApiProperty({ description: '방명록 작성자 비밀번호' })
  authorPw?: string;

  /** 방명록 작성자 IP */
  @Column({ select: false })
  @ApiProperty({ description: '방명록 작성자 IP' })
  ip?: string;

  /** 방명록 내용 */
  @Column()
  @ApiProperty({ description: '방명록 내용' })
  cont?: string;

  /** 관리자 계정 여부 */
  @Column()
  @ApiProperty({ description: '관리자 계정 여부' })
  adminYn?: string;

  /** 방명록 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '방명록 등록일시' })
  regDate?: Date;

  /** 방명록 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '방명록 수정일시' })
  modDate?: Date;

  /** 방명록 댓글 */
  @OneToMany(() => GuestbookReplyEntity, (guestbookReply) => guestbookReply.guestbook)
  @JoinColumn({ referencedColumnName: 'id' })
  @ApiProperty({ description: '방명록 댓글' })
  guestbookReply?: GuestbookReplyEntity[];
  
}
