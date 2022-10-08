import { BaseEntity, Entity, PrimaryColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity('user_role')
export class UserRole extends BaseEntity {

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

}