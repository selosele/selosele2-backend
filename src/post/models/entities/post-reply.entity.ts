import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('post_reply')
export class PostReplyEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '포스트 댓글 ID'
  })
  id?: number;

  @Column({
    comment: '상위 포스트 ID',
  })
  @ApiProperty({
    description: '상위 포스트 ID',
  })
  parentId?: number;

  @Column({
    comment: '상위 댓글 ID',
  })
  @ApiProperty({
    description: '상위 댓글 ID',
  })
  parentReplyId?: number;

  @Column({
    comment: '포스트 댓글 그룹'
  })
  @ApiProperty({
    description: '포스트 댓글 그룹'
  })
  group?: number;

  @Column({
    comment: '포스트 댓글 순서'
  })
  @ApiProperty({
    description: '포스트 댓글 순서'
  })
  sort?: number;

  @Column({
    comment: '포스트 댓글 계층'
  })
  @ApiProperty({
    description: '포스트 댓글 계층'
  })
  depth?: number;

  @Column({
    comment: '포스트 댓글 작성자'
  })
  @ApiProperty({
    description: '포스트 댓글 작성자'
  })
  author?: string;

  @Column({
    comment: '포스트 댓글 작성자 비밀번호'
  })
  @ApiProperty({
    description: '포스트 댓글 작성자 비밀번호'
  })
  authorPw?: string;

  @Column({
    comment: '포스트 댓글 작성자 IP'
  })
  @ApiProperty({
    description: '포스트 댓글 작성자 IP'
  })
  ip?: string;

  @Column({
    comment: '포스트 댓글 내용'
  })
  @ApiProperty({
    description: '포스트 댓글 내용'
  })
  cont?: string;

  @CreateDateColumn({
    comment: '포스트 댓글 작성일시'
  })
  @ApiProperty({
    description: '포스트 댓글 작성일시'
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '포스트 댓글 수정일시'
  })
  @ApiProperty({
    description: '포스트 댓글 수정일시'
  })
  modDate?: Date;

  @DeleteDateColumn({
    comment: '포스트 댓글 수정일시'
  })
  @ApiProperty({
    description: '포스트 댓글 수정일시'
  })
  delDate?: Date;
  
}