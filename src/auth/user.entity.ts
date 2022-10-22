import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./user-role.entity";

@Entity('user')
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '사용자 일련번호'
  })
  userSn?: number;

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

  @OneToMany(() => UserRole, userRole => userRole.user)
  @JoinColumn({ referencedColumnName: 'user_id' })
  @ApiProperty({
    description: '사용자 권한'
  })
  userRole?: UserRole[];

}