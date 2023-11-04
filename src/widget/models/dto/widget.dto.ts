/** 위젯 DTO */
export class WidgetDto {

  /** 위젯 ID */
  id?: number;

  /** 위젯 명 */
  title?: string;

  /** 위젯 아이콘 */
  icon?: string;

  /** 위젯 정렬 순서 */
  sort?: number;

  /** 위젯 사용 여부 */
  useYn?: string;

  /** 위젯 등록일시 */
  regDate?: Date;

  /** 위젯 수정일시 */
  modDate?: Date;

}
