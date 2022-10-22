import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tag')
export class Tag extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: 'id'
  })
  id?: string;

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
  
}
