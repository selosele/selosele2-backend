import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('post_like')
export class PostLike extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '포스트 추천 ID',
  })
  id?: number;

  @Column({
    comment: '포스트 ID',
  })
  @ApiProperty({
    description: '포스트 ID',
  })
  postId?: number;

  @Column({
    comment: '포스트 추천자 IP',
  })
  @ApiProperty({
    description: '포스트 추천자 IP',
  })
  ip?: string;

  @CreateDateColumn({
    comment: '포스트 추천일시',
  })
  @ApiProperty({
    description: '포스트 추천일시',
  })
  regDate?: Date;
  
}
