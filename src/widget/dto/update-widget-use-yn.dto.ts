import { IsNotEmpty } from 'class-validator';

/** 위젯 사용여부 수정 DTO */
export class UpdateWidgetUseYnDto {

  /** 위젯 ID 목록 */
  @IsNotEmpty()
  useWidgetId?: number[];

}
