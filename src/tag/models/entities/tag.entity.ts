import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { PostTagEntity } from './post-tag.entity';

@Entity('tag')
export class TagEntity extends BaseEntity {

  /** 태그 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '태그 ID' })
  id?: number;

  /** 태그 명 */
  @Column()
  @ApiProperty({ description: '태그 명' })
  nm?: string;

  /** 태그 설명 */
  @Column()
  @ApiProperty({ description: '태그 설명' })
  desc?: string;

  /** 태그 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '태그 등록일시' })
  regDate?: Date;

  /** 태그 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '태그 수정일시' })
  modDate?: Date;

  /** 포스트 태그 */
  @OneToMany(() => PostTagEntity, (postTag) => postTag.tag)
  @JoinColumn({ referencedColumnName: 'tag_id' })
  @ApiProperty({ description: '포스트 태그' })
  postTag?: PostTagEntity[];
  
}
