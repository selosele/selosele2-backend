import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { UserRoleEntity } from "./user-role.entity";

@Entity('role')
export class RoleEntity extends BaseEntity {

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

  @OneToMany(() => UserRoleEntity, userRole => userRole.role)
  @JoinColumn({ referencedColumnName: 'role_id' })
  @ApiProperty({
    description: '사용자 권한'
  })
  userRole?: UserRoleEntity[];

}
