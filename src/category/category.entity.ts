import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('category')
export class Category extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: 'id'
  })
  id?: string;

  @Column({
    comment: '카테고리 명'
  })
  @ApiProperty({
    description: '카테고리 명'
  })
  nm?: string;

  @CreateDateColumn({
    comment: '카테고리 등록일시'
  })
  @ApiProperty({
    description: '카테고리 등록일시'
  })
  regDate?: Date;
  
}
