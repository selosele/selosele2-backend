import { IsNotEmpty } from 'class-validator';

/** 위젯 수정 DTO */
export class UpdateWidgetDto {

  /** 위젯 ID */
  @IsNotEmpty()
  id?: number;

  /** 위젯 명 */
  @IsNotEmpty()
  title?: string;

  /** 위젯 아이콘 */
  @IsNotEmpty()
  icon?: string;

  /** 위젯 정렬 순서 */
  @IsNotEmpty()
  sort?: number;

  /** 위젯 사용여부 */
  @IsNotEmpty()
  useYn?: string;

}
