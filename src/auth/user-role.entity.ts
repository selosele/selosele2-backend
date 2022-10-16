import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "./user.entity";
import { Role } from "./role.entity";

@Entity('user_role')
export class UserRole extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: '사용자 일련번호'
  })
  userSn?: number;

  @PrimaryColumn()
  @ApiProperty({
    description: '사용자 ID'
  })
  userId?: string;
  
  @PrimaryColumn()
  @ApiProperty({
    description: '권한 ID'
  })
  roleId?: string;

  @ManyToOne(() => User, user => user.roles)
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({
    description: '사용자'
  })
  user?: User;

  @ManyToOne(() => Role, role => role.roles)
  @JoinColumn({ name: 'role_id' })
  @ApiProperty({
    description: '권한'
  })
  role?: Role;

}