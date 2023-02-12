/** 카카오톡 메시지 전송 API */
export interface KakaoMessageApi {

  /** 카카오톡 액세스 토큰 갱신 header */
  getRefreshTokenHeaders();

  /** 카카오톡 액세스 토큰 갱신 body */
  getRefreshTokenBody();

  /** 카카오톡 메시지 전송 header */
  getSendMessageHeaders(token: string): { "Content-Type": string, "Authorization": string };

  /** 카카오톡 메시지 전송 body */
  getSendMessageBody(text: string, url: string): { "template_object": string };

}
