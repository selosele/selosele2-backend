import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostEntity } from './post.entity';

@Entity('post_reply')
export class PostReplyEntity extends BaseEntity {

  /** 포스트 댓글 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '포스트 댓글 ID' })
  id?: number;

  /** 상위 포스트 ID */
  @Column()
  @ApiProperty({ description: '상위 포스트 ID' })
  parentId?: number;

  /** 상위 댓글 ID */
  @Column()
  @ApiProperty({ description: '상위 댓글 ID' })
  parentReplyId?: number;

  /** 포스트 댓글 그룹 */
  @Column()
  @ApiProperty({ description: '포스트 댓글 그룹' })
  group?: number;

  /** 포스트 댓글 순서 */
  @Column()
  @ApiProperty({ description: '포스트 댓글 순서' })
  sort?: number;

  /** 포스트 댓글 계층 */
  @Column()
  @ApiProperty({ description: '포스트 댓글 계층' })
  depth?: number;

  /** 포스트 댓글 작성자 */
  @Column()
  @ApiProperty({ description: '포스트 댓글 작성자' })
  author?: string;

  /** 포스트 댓글 작성자 비밀번호 */
  @Column()
  @ApiProperty({ description: '포스트 댓글 작성자 비밀번호' })
  authorPw?: string;

  /** 포스트 댓글 작성자 IP */
  @Column({ select: false })
  @ApiProperty({ description: '포스트 댓글 작성자 IP' })
  ip?: string;

  /** 포스트 댓글 내용 */
  @Column()
  @ApiProperty({ description: '포스트 댓글 내용' })
  cont?: string;

  /** 포스트 댓글 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '포스트 댓글 등록일시' })
  regDate?: Date;

  /** 포스트 댓글 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '포스트 댓글 수정일시' })
  modDate?: Date;

  /** 포스트 댓글 삭제 여부 */
  @Column()
  @ApiProperty({ description: '포스트 댓글 삭제 여부' })
  delYn?: string;

  /** 관리자 계정 여부 */
  @Column()
  @ApiProperty({ description: '관리자 계정 여부' })
  adminYn?: string;

  /** 포스트 */
  @ManyToOne(() => PostEntity, (post) => post.postReply)
  @JoinColumn({ name: 'parent_id' })
  @ApiProperty({ type: () => PostEntity, description: '포스트' })
  post?: PostEntity;
  
}
