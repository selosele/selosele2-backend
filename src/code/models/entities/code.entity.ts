import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('code')
export class CodeEntity extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: '코드 ID'
  })
  id?: string;

  @Column({
    comment: '코드 접두어'
  })
  @ApiProperty({
    description: '코드 접두어'
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
    comment: '코드 등록일시'
  })
  @ApiProperty({
    description: '코드 등록일시'
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '코드 수정일시'
  })
  @ApiProperty({
    description: '코드 수정일시'
  })
  modDate?: Date;

  @Column({
    comment: '코드 사용 여부'
  })
  @ApiProperty({
    description: '코드 사용 여부'
  })
  useYn?: string;
  
}
