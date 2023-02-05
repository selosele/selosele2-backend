import { IsNotEmpty } from 'class-validator';

/** 위젯 목록 조회 DTO */
export class ListWidgetDto {

  /** 위젯 사용 여부 */
  @IsNotEmpty()
  useYn?: string;

}
