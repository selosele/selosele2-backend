import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostEntity } from './post.entity';

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
    comment: '포스트 댓글 작성자 IP',
    select: false,
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
    comment: '포스트 댓글 등록일시'
  })
  @ApiProperty({
    description: '포스트 댓글 등록일시'
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '포스트 댓글 수정일시'
  })
  @ApiProperty({
    description: '포스트 댓글 수정일시'
  })
  modDate?: Date;

  @Column({
    comment: '포스트 댓글 삭제 여부'
  })
  @ApiProperty({
    description: '포스트 댓글 삭제 여부'
  })
  delYn?: string;

  @Column({
    comment: '관리자 계정 여부'
  })
  @ApiProperty({
    description: '관리자 계정 여부'
  })
  adminYn?: string;

  @ManyToOne(() => PostEntity, (post) => post.postReply)
  @JoinColumn({ name: 'parent_id' })
  @ApiProperty({
    type: () => PostEntity,
    description: '포스트',
  })
  post?: PostEntity;
  
}
