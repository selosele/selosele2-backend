import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/auth/role.entity";
import { User } from "./user.entity";

@Entity({ name: 'user_role' })
export class UserRole extends BaseEntity {

  @PrimaryColumn()
  @ManyToOne(() => User, user => user.userId)
  @JoinColumn()
  @ApiProperty({
    description: '사용자 ID'
  })
  userId?: string;

  @PrimaryColumn()
  @ManyToOne(() => Role, role => role.roleId)
  @JoinColumn()
  @ApiProperty({
    description: '권한 ID'
  })
  roleId?: string;

}