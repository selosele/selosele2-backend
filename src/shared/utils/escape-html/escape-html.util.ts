import * as sanitizeHtml from 'sanitize-html';

/** self closing 태그 목록 */
const selfClosingTags = [
  'result',
];

/** HTML을 escape한다. */
export function escapeHtml(dirty: string, options?: sanitizeHtml.IOptions): string {
  return sanitizeHtml(dirty, options);
}

/** santinize-html 공통 옵션 */
export const santinizeHtmlOption: sanitizeHtml.IOptions = {

  /** self closing할 태그 목록 */
  selfClosing: selfClosingTags,
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
