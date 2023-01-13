import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('widget')
export class WidgetEntity extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: '위젯 ID'
  })
  id?: number;

  @Column({
    comment: '위젯명'
  })
  @ApiProperty({
    description: '위젯 명'
  })
  title?: string;

  @Column({
    comment: '위젯 아이콘'
  })
  @ApiProperty({
    description: '위젯 아이콘'
  })
  icon?: string;

  @Column({
    comment: '위젯 정렬 순서'
  })
  @ApiProperty({
    description: '위젯 정렬 순서'
  })
  sort?: number;

  @Column({
    comment: '위젯 사용여부'
  })
  @ApiProperty({
    description: '위젯 사용여부'
  })
  useYn?: string;

  @CreateDateColumn({
    comment: '위젯 등록일시'
  })
  @ApiProperty({
    description: '위젯 등록일시'
  })
  regDate?: Date;

  @UpdateDateColumn({
    comment: '위젯 수정일시'
  })
  @ApiProperty({
    description: '위젯 수정일시'
  })
  modDate?: Date;
  
}
