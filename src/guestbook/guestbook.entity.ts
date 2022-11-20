import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('guestbook')
export class GuestbookEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '방명록 ID'
  })
  id?: number;

  @Column({
    comment: '방명록 작성자'
  })
  @ApiProperty({
    description: '방명록 작성자'
  })
  author?: string;

  @Column({
    comment: '방명록 작성자 비밀번호'
  })
  @ApiProperty({
    description: '방명록 작성자 비밀번호'
  })
  authorPw?: string;

  @Column({
    comment: '방명록 작성자 IP'
  })
  @ApiProperty({
    description: '방명록 작성자 IP'
  })
  ip?: string;

  @Column({
    comment: '방명록 내용'
  })
  @ApiProperty({
    description: '방명록 내용'
  })
  cont?: string;

  @Column({
    comment: '방명록 댓글수'
  })
  @ApiProperty({
    description: '방명록 댓글수'
  })
  replyCnt?: number;

  @Column({
    comment: '방명록 등록일시'
  })
  @ApiProperty({
    description: '방명록 등록일시'
  })
  regDate?: Date;

  @Column({
    comment: '방명록 수정일시'
  })
  @ApiProperty({
    description: '방명록 수정일시'
  })
  modDate?: Date;
  
}
