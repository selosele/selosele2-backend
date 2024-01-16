import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProgramDetailEntity } from './program-detail.entity';

@Entity('program')
export class ProgramEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '프로그램 그룹 ID'
  })
  id?: number;

  @Column({
    comment: '프로그램 그룹 명'
  })
  @ApiProperty({
    description: '프로그램 그룹 명'
  })
  nm?: string;

  @CreateDateColumn({
    comment: '프로그램 그룹 등록일시'
  })
  @ApiProperty({
    description: '프로그램 그룹 등록일시'
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '프로그램 그룹 수정일시'
  })
  @ApiProperty({
    description: '프로그램 그룹 수정일시'
  })
  modDate?: Date;

  @OneToMany(() => ProgramDetailEntity, (programDetail) => programDetail.program)
  @JoinColumn({ referencedColumnName: 'id' })
  @ApiProperty({
    description: '프로그램 상세'
  })
  programDetail?: ProgramDetailEntity[];
  
}
