import { Options, parse as nodeHTMLParser } from 'node-html-parser';
import { isBlank } from '../common/common.util';

/** rawText로 파싱한 결과물을 반환한다. */
export function getRawText(str: string): string {
  if (isBlank(str)) return '';

  let opt: Options = {
    blockTextElements: {
      pre: false
    }
  };

  return nodeHTMLParser.parse(str, opt).rawText;
}
