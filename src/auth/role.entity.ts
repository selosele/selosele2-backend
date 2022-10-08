import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'role' })
export class Role extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: '권한 ID'
  })
  roleId?: string;

  @Column()
  @ApiProperty({
    description: '권한 명'
  })
  roleNm?: string;

  @CreateDateColumn()
  @ApiProperty({
    description: '권한 등록일시'
  })
  regDate?: Date;

  @UpdateDateColumn()
  @ApiProperty({
    description: '권한 수정일시'
  })
  modDate?: Date;

  @Column()
  @ApiProperty({
    description: '권한 삭제여부'
  })
  delYn?: string;

}