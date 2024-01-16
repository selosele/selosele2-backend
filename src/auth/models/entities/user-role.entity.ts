import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "./user.entity";
import { RoleEntity } from "./role.entity";

@Entity('user_role')
export class UserRoleEntity extends BaseEntity {

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

  @ManyToOne(() => UserEntity, (user) => user.userRole)
  @JoinColumn({ name: 'user_id' })
  @ApiProperty({
    description: '사용자'
  })
  user?: UserEntity;

  @ManyToOne(() => RoleEntity, (role) => role.userRole)
  @JoinColumn({ name: 'role_id' })
  @ApiProperty({
    description: '권한'
  })
  role?: RoleEntity;

}