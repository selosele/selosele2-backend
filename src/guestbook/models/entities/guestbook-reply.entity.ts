import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GuestbookEntity } from './guestbook.entity';

@Entity('guestbook_reply')
export class GuestbookReplyEntity extends BaseEntity {

  /** 방명록 댓글 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '방명록 댓글 ID' })
  id?: number;

  /** 상위 방명록 ID */
  @Column()
  @ApiProperty({ description: '상위 방명록 ID' })
  parentId?: number;

  /** 방명록 댓글 계층 */
  @Column()
  @ApiProperty({ description: '방명록 댓글 계층' })
  depth?: number;

  /** 방명록 댓글 작성자 */
  @Column()
  @ApiProperty({ description: '방명록 댓글 작성자' })
  author?: string;

  /** 방명록 댓글 작성자 비밀번호 */
  @Column()
  @ApiProperty({ description: '방명록 댓글 작성자 비밀번호' })
  authorPw?: string;

  /** 방명록 댓글 작성자 IP */
  @Column({ select: false })
  @ApiProperty({ description: '방명록 댓글 작성자 IP' })
  ip?: string;

  /** 방명록 댓글 내용 */
  @Column()
  @ApiProperty({ description: '방명록 댓글 내용' })
  cont?: string;

  /** 관리자 계정 여부 */
  @Column()
  @ApiProperty({ description: '관리자 계정 여부' })
  adminYn?: string;

  /** 방명록 댓글 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '방명록 댓글 등록일시' })
  regDate?: Date;

  /** 방명록 댓글 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '방명록 댓글 수정일시' })
  modDate?: Date;

  /** 방명록 */
  @ManyToOne(() => GuestbookEntity, (guestbook) => guestbook.guestbookReply)
  @JoinColumn({ name: 'parent_id' })
  @ApiProperty({ type: () => GuestbookEntity, description: '방명록' })
  guestbook?: GuestbookEntity;
  
}
