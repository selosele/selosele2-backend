import { IsEmpty, IsNotEmpty } from "class-validator";

/** 카카오톡 메시지 전송 DTO */
export class SendKakaoMessageDto {

  constructor(text: string, url: string) {
    this.text = text;
    this.link.web_url = url;
    this.link.mobile_web_url = url;
  }

  /** object_type */
  @IsEmpty()
  object_type?: string = 'text';

  /** 내용 */
  @IsNotEmpty()
  text?: string;

  /** 링크 */
  @IsNotEmpty()
  link?: {
    web_url: string,
    mobile_web_url: string,
  } = {
    web_url: '',
    mobile_web_url: '',
  };

  /** 버튼 텍스트 */
  @IsEmpty()
  button_title?: string = '바로 확인';

}
