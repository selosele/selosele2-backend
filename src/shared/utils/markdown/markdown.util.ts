import MarkdownIt = require('markdown-it');
import anchor from 'markdown-it-anchor';

/** Markdown 설정 유틸 */
export const md = new MarkdownIt()
                      .use(require('markdown-it-iframe'), { height: 265 })
                      .use(require('markdown-it-mark'))
                      .use(require('markdown-it-link-attributes'), {
                        matcher(href: string, config) {
                          return href.startsWith("https:");
                        },
                        attrs: {
                          target: '_blank',
                          title: '새창',
                          rel: 'noopener noreferrer nofollow',
                        },
                      })
                      .use(anchor, {
                        permalink: anchor.permalink.linkInsideHeader({
                          symbol: ``,
                          placement: 'before',
                          renderAttrs: () => {
                            return {
                              'title': '제목으로 바로가기',
                            }
                          },
                        })
                      })
                      .use(require('markdown-it-abbr'))
                      .use(require('markdown-it-attrs'), {
                        leftDelimiter: '{',
                        rightDelimiter: '}',
                        allowedAttributes: [],
                      })
                      .use(require('markdown-it-footnote'))
                      .use(require('markdown-it-highlightjs'))
                      .use(require('markdown-it-emoji'));
