import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export class User extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: '사용자 ID'
  })
  userId?: string;

  @Column()
  @ApiProperty({
    description: '사용자 비밀번호'
  })
  userPw?: string;

  @CreateDateColumn()
  @ApiProperty({
    description: '사용자 생성일시'
  })
  regDate?: Date;

}