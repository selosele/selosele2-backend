import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'cmmn_code' })
export class Code extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'id'
  })
  id?: string;

  @Column({
    comment: '코드 접두사'
  })
  @ApiProperty({
    description: '코드 접두사'
  })
  prefix?: string;

  @Column({
    comment: '코드 값'
  })
  @ApiProperty({
    description: '코드 값'
  })
  val?: string;

  @Column({
    comment: '코드 명'
  })
  @ApiProperty({
    description: '코드 명'
  })
  nm?: string;

  @Column({
    comment: '코드 설명'
  })
  @ApiProperty({
    description: '코드 설명'
  })
  desc?: string;

  @CreateDateColumn({
    comment: '코드 등록일자'
  })
  @ApiProperty({
    description: '코드 등록일자'
  })
  reg_date?: Date;

  @UpdateDateColumn({
    comment: '코드 수정일자'
  })
  @ApiProperty({
    description: '코드 수정일자'
  })
  mod_date?: Date;

  @Column({
    comment: '코드 사용여부'
  })
  @ApiProperty({
    description: '코드 사용여부'
  })
  use_yn?: string;
  
}
