import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProgramEntity } from './program.entity';

@Entity('program_detail')
export class ProgramDetailEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: '프로그램 상세 ID'
  })
  id?: number;

  @Column({
    comment: '프로그램 그룹 ID',
  })
  @ApiProperty({
    description: '프로그램 그룹 ID',
  })
  parentId?: number;

  @Column({
    comment: '프로그램 명'
  })
  @ApiProperty({
    description: '프로그램 명'
  })
  nm?: string;

  @Column({
    comment: '요청 메소드'
  })
  @ApiProperty({
    description: '요청 메소드'
  })
  method?: string;

  @Column({
    comment: '요청 URL ROUTE PATH'
  })
  @ApiProperty({
    description: '요청 URL ROUTE PATH'
  })
  routePath?: string;

  @Column({
    comment: '프로그램 사용 여부'
  })
  @ApiProperty({
    description: '프로그램 사용 여부'
  })
  useYn?: string;

  @CreateDateColumn({
    comment: '프로그램 등록일시'
  })
  @ApiProperty({
    description: '프로그램 등록일시'
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '프로그램 수정일시'
  })
  @ApiProperty({
    description: '프로그램 수정일시'
  })
  modDate?: Date;

  @ManyToOne(() => ProgramEntity, program => program.programDetail)
  @JoinColumn({ name: 'parent_id' })
  @ApiProperty({
    type: () => ProgramEntity,
    description: '프로그램 그룹',
  })
  program?: ProgramEntity;
  
}
