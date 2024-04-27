import { isBlank } from '../common/common.util';

/** Markdown -> 순수 텍스트로 파싱한 결과물을 반환한다. */
export function getRawText(md: string): string {
  if (isBlank(md)) return '';

  md = md.replace(/#/g, '').trim()                        // h1
         .replace(/##/g, '').trim()                       // h2
         .replace(/###/g, '').trim()                      // h3
         .replace(/####/g, '').trim()                     // h4
         .replace(/#####/g, '').trim()                    // h5
         .replace(/######/g, '').trim()                   // h6
         .replace(/\n\s*---\s*\n/g, '').trim()            // hr
         .replace(/\/i\/\S+/g, '').trim()                 // iframe
         .replace(/\**/g, '').trim()                      // 볼드체
         .replace(/```.*?$/gm, '').trim()                 // 코드 블럭
         .replace(/```/g, '').trim()                      // 코드 하이라이트
         .replace(/{\.language-.+?}/g, '').trim()         // 코드 하이라이트 클래스
         .replace(/\!\[(.*?)\]\((.*?)\)/g, '').trim()     // 이미지
         .replace(/\[(.*?)\]\((.*?)\)/g, '$1').trim();    // 링크

  return md;
}
