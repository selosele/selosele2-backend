import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GuestbookReplyEntity } from './guestbook-reply.entity';

@Entity('guestbook')
export class GuestbookEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '방명록 ID',
  })
  id?: number;

  @Column({
    comment: '방명록 작성자',
  })
  @ApiProperty({
    description: '방명록 작성자',
  })
  author?: string;

  @Column({
    comment: '방명록 작성자 비밀번호',
  })
  @ApiProperty({
    description: '방명록 작성자 비밀번호',
  })
  authorPw?: string;

  @Column({
    comment: '방명록 작성자 IP',
    select: false,
  })
  @ApiProperty({
    description: '방명록 작성자 IP',
  })
  ip?: string;

  @Column({
    comment: '방명록 내용',
  })
  @ApiProperty({
    description: '방명록 내용',
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
    comment: '방명록 등록일시',
  })
  @ApiProperty({
    description: '방명록 등록일시',
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '방명록 수정일시',
  })
  @ApiProperty({
    description: '방명록 수정일시',
  })
  modDate?: Date;

  @OneToMany(() => GuestbookReplyEntity, guestbookReply => guestbookReply.guestbook)
  @JoinColumn({ referencedColumnName: 'id' })
  @ApiProperty({
    description: '방명록 댓글',
  })
  guestbookReply?: GuestbookReplyEntity[];
  
}
