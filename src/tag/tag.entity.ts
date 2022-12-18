import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostTagEntity } from './post-tag.entity';

@Entity('tag')
export class TagEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '태그 ID'
  })
  id?: number;

  @Column({
    comment: '태그 명'
  })
  @ApiProperty({
    description: '태그 명'
  })
  nm?: string;

  @CreateDateColumn({
    comment: '태그 등록일시'
  })
  @ApiProperty({
    description: '태그 등록일시'
  })
  regDate?: Date;

  @OneToMany(() => PostTagEntity, postTag => postTag.tag)
  @JoinColumn({ referencedColumnName: 'tag_id' })
  @ApiProperty({
    description: '포스트 태그'
  })
  postTag?: PostTagEntity[];
  
}
