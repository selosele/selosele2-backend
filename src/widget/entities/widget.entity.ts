import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('widget')
export class WidgetEntity extends BaseEntity {

  @PrimaryColumn()
  @ApiProperty({
    description: '위젯 ID'
  })
  id?: string;

  @Column({
    comment: '위젯명'
  })
  @ApiProperty({
    description: '위젯명'
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
    comment: '위젯 위치 값'
  })
  @ApiProperty({
    description: '위젯 위치 값'
  })
  position?: string;

  @Column({
    comment: '위젯 사용여부'
  })
  @ApiProperty({
    description: '위젯 사용여부'
  })
  useYn?: string;
  
}
