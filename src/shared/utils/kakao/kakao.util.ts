import { StaticImplements } from "src/shared/decorators"
import { SendKakaoMessageDto } from "src/shared/models"
import { KakaoMessageApi } from "./models/kakao.model"

/** 카카오톡 유틸 */
@StaticImplements<KakaoMessageApi>() 
export class kakaoUtil {

  constructor() {
  }

  static getRefreshTokenHeaders() {

  }

  static getRefreshTokenBody() {
    
  }

  /** 카카오톡 메시지 전송 header */
  static getSendMessageHeaders(token: string): { "Content-Type": string, "Authorization": string } {
    return {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Bearer ${token}`,
    }
  }

  /** 카카오톡 메시지 전송 body */
  static getSendMessageBody(text: string, url: string): { "template_object": string } {
    return {
      "template_object": JSON.stringify(new SendKakaoMessageDto(text, url))
    }
  }

}
