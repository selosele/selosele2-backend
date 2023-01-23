import { Options, parse } from 'node-html-parser';

/** rawText 가져오기 */
export function getRawText(str: string): string {
  let opt: Options = {
    blockTextElements: {
      pre: false
    }
  };

  return parse.parse(str, opt).rawText;
};
