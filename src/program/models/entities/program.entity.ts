import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProgramDetailEntity } from './program-detail.entity';

@Entity('program')
export class ProgramEntity extends BaseEntity {

  /** 프로그램 그룹 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '프로그램 그룹 ID' })
  id?: number;

  /** 프로그램 그룹 명 */
  @Column()
  @ApiProperty({ description: '프로그램 그룹 명' })
  nm?: string;

  /** 프로그램 그룹 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '프로그램 그룹 등록일시' })
  regDate?: Date;

  /** 프로그램 그룹 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '프로그램 그룹 수정일시' })
  modDate?: Date;

  /** 프로그램 상세 */
  @OneToMany(() => ProgramDetailEntity, (programDetail) => programDetail.program)
  @JoinColumn({ referencedColumnName: 'id' })
  @ApiProperty({ description: '프로그램 상세' })
  programDetail?: ProgramDetailEntity[];
  
}
