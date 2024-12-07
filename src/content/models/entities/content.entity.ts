import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('content')
export class ContentEntity extends BaseEntity {

  /** 콘텐츠 ID */
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '콘텐츠 ID' })
  id?: number;

  /** 콘텐츠 링크 */
  @Column()
  @ApiProperty({ description: '콘텐츠 링크' })
  link?: string;

  /** 콘텐츠 제목 */
  @Column()
  @ApiProperty({ description: '콘텐츠 제목' })
  title?: string;

  /** 콘텐츠 등록일시 */
  @CreateDateColumn()
  @ApiProperty({ description: '콘텐츠 등록일시' })
  regDate?: Date;

  /** 콘텐츠 수정일시 */
  @UpdateDateColumn()
  @ApiProperty({ description: '콘텐츠 수정일시' })
  modDate?: Date;

  /** 콘텐츠 내용 */
  @Column()
  @ApiProperty({ description: '콘텐츠 내용' })
  cont?: string;

  /** 콘텐츠 대표 이미지 */
  @Column()
  @ApiProperty({ description: '콘텐츠 대표 이미지' })
  ogImg?: string;
  
  /** 콘텐츠 대표 이미지 URL */
  @Column()
  @ApiProperty({ description: '콘텐츠 대표 이미지 URL' })
  ogImgUrl?: string;
  
  /** 콘텐츠 대표 이미지 용량 */
  @Column()
  @ApiProperty({ description: '콘텐츠 대표 이미지 용량' })
  ogImgSize?: number;

  /** 콘텐츠 내용 요약 */
  @Column()
  @ApiProperty({ description: '콘텐츠 내용 요약' })
  ogDesc?: string;

  /** 콘텐츠 임시저장 여부 */
  @Column()
  @ApiProperty({ description: '콘텐츠 임시저장 여부' })
  tmpYn?: string;
  
}
