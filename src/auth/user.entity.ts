import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryColumn, Unique } from "typeorm";

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

  @Column()
  @ApiProperty({
    description: '권한 ID'
  })
  roleId?: string;

}