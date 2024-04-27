import { isBlank } from '../common/common.util';

/** 순수 텍스트로 파싱한 결과물을 반환한다. */
export function getRawText(str: string): string {
  if (isBlank(str)) return '';

  str = str.replace(/##/g, '')                       // h2
           .replace(/###/g, '')                      // h3
           .replace(/####/g, '')                     // h4
           .replace(/#####/g, '')                    // h5
           .replace(/######/g, '')                   // h6
           .replace(/\**/g, '')                      // 볼드체
           .replace(/```/g, '')                      // 코드 하이라이트
           .replace(/{\.language-.+?}/g, '')         // 코드 하이라이트 클래스
           .replace(/!\[.+?\]\(.+?\)/g, '')          // 이미지
           .replace(/\[(.*?)\]\((.*?)\)/g, '$1');    // 링크

  return str.trim();
}
