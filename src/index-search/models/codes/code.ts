/** 검색 공통코드 */
export const searchCodes = {
  SEARCH_ALL:            { id: 'A01001', prefix: 'A01', val: '001', nm: '전체', desc: '포스트 검색조건', useYn: 'Y' },
  SEARCH_TITLE:          { id: 'A01002', prefix: 'A01', val: '002', nm: '제목', desc: '포스트 검색조건', useYn: 'Y' },
  SEARCH_CONTENT:        { id: 'A01003', prefix: 'A01', val: '003', nm: '내용', desc: '포스트 검색조건', useYn: 'N' },
  SEARCH_CATEGORY:       { id: 'A01004', prefix: 'A01', val: '004', nm: '카테고리', desc: '포스트 검색조건', useYn: 'Y' },
  SEARCH_TAG:            { id: 'A01005', prefix: 'A01', val: '005', nm: '태그', desc: '포스트 검색조건', useYn: 'N' },

  INDEX_SEARCH_POST:     { id: 'D03001', prefix: 'D03', val: '001', nm: '포스트', desc: '검색 유형', useYn: 'Y' },
  INDEX_SEARCH_CONTENT:  { id: 'D03002', prefix: 'D03', val: '002', nm: '콘텐츠', desc: '검색 유형', useYn: 'Y' },
};