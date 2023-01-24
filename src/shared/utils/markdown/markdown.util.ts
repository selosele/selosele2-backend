import MarkdownIt = require('markdown-it');
import anchor from 'markdown-it-anchor';

/** Markdown 유틸 */
export const md = new MarkdownIt()
                      .use(require('markdown-it-iframe'), { height: 265 })
                      .use(require('markdown-it-mark'))
                      .use(require('markdown-it-link-attributes'), {
                        pattern: /^https:/,
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