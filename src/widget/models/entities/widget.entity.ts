import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('widget')
export class WidgetEntity extends BaseEntity {

  /** 위젯 ID */
  @PrimaryColumn()
  @ApiProperty({ description: '위젯 ID' })
  id?: number;

  /** 위젯명 */
  @Column()
  @ApiProperty({ description: '위젯 명' })
  title?: string;

  /** 위젯 아이콘 */
  @Column()
  @ApiProperty({ description: '위젯 아이콘' })
  icon?: string;

  /** 위젯 정렬 순서 */
  @Column()
  @ApiProperty({ description: '위젯 정렬 순서' })
  sort?: number;

  /** 위젯 사용 여부 */
  @Column()
  @ApiProperty({ description: '위젯 사용 여부' })
  useYn?: string;

  /** 위젯 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '위젯 등록일시' })
  regDate?: Date;

  /** 위젯 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '위젯 수정일시' })
  modDate?: Date;
  
}
