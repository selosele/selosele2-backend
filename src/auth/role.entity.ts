import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "./user-role.entity";

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

  @OneToMany(() => UserRole, userRole => userRole.role)
  @JoinColumn({ referencedColumnName: 'role_id' })
  @ApiProperty({
    description: '사용자 권한'
  })
  userRole?: UserRole[];

}

export enum RoleEnum {
  ROLE_ANONYMOUS = 'ROLE_ANONYMOUS',
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_TEST = 'ROLE_TEST',
};

export const RoleDefaultList = [
  RoleEnum.ROLE_ANONYMOUS,
];