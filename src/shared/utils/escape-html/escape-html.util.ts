import * as sanitizeHtml from 'sanitize-html';

/** 허용할 태그 목록 */
const allowTags = [
  'listener',       // 운영 환경 11번 포스트
  'listener-class', // 운영 환경 11번 포스트
  'sqlMap',         // 운영 환경 9번 포스트
  'resultMap',      // 운영 환경 9번 포스트
  'result',         // 운영 환경 9번 포스트
  'select',         // 운영 환경 9번 포스트
  'FOO',            // 운영 환경 7번 포스트
];

/** HTML을 escape한다. */
export function escapeHtml(plain: string, option?: sanitizeHtml.IOptions): string {
  return sanitizeHtml(plain, option);
}

/** santinize-html 공통 옵션 */
export const santinizeHtmlOption: sanitizeHtml.IOptions = {

  // 디폴트 allowTags에 추가로 태그 허용
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(allowTags),
  selfClosing: ['result'],
  // 모든 속성 허용
  allowedAttributes: false,
  // iframe 태그를 허용하되, codepen만 허용
  allowedIframeHostnames: ['https://codepen.io/'],
  // code highlight 안에 들어가는 화살표함수 기호나 꺾쇠(ex: i < 0)에 대한 escape 방지
  textFilter: function(text) {
    return text.replace(/=&gt;/g, '=>')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>')
               .replace(/&amp;/g, '&');
  },
  
};
