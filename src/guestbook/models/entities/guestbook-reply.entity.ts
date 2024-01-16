import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GuestbookEntity } from './guestbook.entity';

@Entity('guestbook_reply')
export class GuestbookReplyEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '방명록 댓글 ID',
  })
  id?: number;

  @Column({
    comment: '상위 방명록 ID',
  })
  @ApiProperty({
    description: '상위 방명록 ID',
  })
  parentId?: number;

  @Column({
    comment: '방명록 댓글 계층',
  })
  @ApiProperty({
    description: '방명록 댓글 계층',
  })
  depth?: number;

  @Column({
    comment: '방명록 댓글 작성자',
  })
  @ApiProperty({
    description: '방명록 댓글 작성자',
  })
  author?: string;

  @Column({
    comment: '방명록 댓글 작성자 비밀번호',
  })
  @ApiProperty({
    description: '방명록 댓글 작성자 비밀번호',
  })
  authorPw?: string;

  @Column({
    comment: '방명록 댓글 작성자 IP',
    select: false,
  })
  @ApiProperty({
    description: '방명록 댓글 작성자 IP',
  })
  ip?: string;

  @Column({
    comment: '방명록 댓글 내용',
  })
  @ApiProperty({
    description: '방명록 댓글 내용',
  })
  cont?: string;

  @Column({
    comment: '관리자 계정 여부',
  })
  @ApiProperty({
    description: '관리자 계정 여부',
  })
  adminYn?: string;

  @CreateDateColumn({
    comment: '방명록 댓글 등록일시',
  })
  @ApiProperty({
    description: '방명록 댓글 등록일시',
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '방명록 댓글 수정일시',
  })
  @ApiProperty({
    description: '방명록 댓글 수정일시',
  })
  modDate?: Date;

  @ManyToOne(() => GuestbookEntity, (guestbook) => guestbook.guestbookReply)
  @JoinColumn({ name: 'parent_id' })
  @ApiProperty({
    type: () => GuestbookEntity,
    description: '방명록',
  })
  guestbook?: GuestbookEntity;
  
}
