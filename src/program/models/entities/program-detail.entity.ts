import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ProgramEntity } from './program.entity';

@Entity('program_detail')
export class ProgramDetailEntity extends BaseEntity {

  /** 프로그램 상세 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '프로그램 상세 ID' })
  id?: number;

  /** 프로그램 그룹 ID */
  @Column()
  @ApiProperty({ description: '프로그램 그룹 ID' })
  parentId?: number;

  /** 프로그램 명 */
  @Column()
  @ApiProperty({ description: '프로그램 명' })
  nm?: string;

  /** 요청 메소드 */
  @Column()
  @ApiProperty({ description: '요청 메소드' })
  method?: string;

  /** 요청 URL ROUTE PATH */
  @Column()
  @ApiProperty({ description: '요청 URL ROUTE PATH' })
  routePath?: string;

  /** 프로그램 사용 여부 */
  @Column()
  @ApiProperty({ description: '프로그램 사용 여부' })
  useYn?: string;

  /** 프로그램 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '프로그램 등록일시' })
  regDate?: Date;

  /** 프로그램 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '프로그램 수정일시' })
  modDate?: Date;

  /** 프로그램 그룹 */
  @ManyToOne(() => ProgramEntity, (program) => program.programDetail)
  @JoinColumn({ name: 'parent_id' })
  @ApiProperty({ type: () => ProgramEntity, description: '프로그램 그룹' })
  program?: ProgramEntity;
  
}
