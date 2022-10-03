import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { UserRole } from "./user-role.entity";

@Entity({ name: 'user' })
export class User extends BaseEntity {

  @PrimaryColumn()
  @OneToMany(() => UserRole, userRole => userRole.userId)
  @JoinColumn()
  @ApiProperty({
    description: '사용자 ID'
  })
  userId?: string;

  @Column()
  @ApiProperty({
    description: '사용자 비밀번호'
  })
  userPw?: string;

  @OneToMany(() => UserRole, userRole => userRole.roleId)
  @JoinColumn()
  @ApiProperty({
    description: '권한 ID'
  })
  roleId?: string;

}