/** 모든 업무단에서 사용되는 공통코드 */
export const globalCodes = {
  SNS_TWITTER:    { id: 'C01001', prefix: 'C01', val: '001', nm: '트위터', desc: 'SNS', useYn: 'Y' },
  SNS_FACEBOOK:   { id: 'C01002', prefix: 'C01', val: '002', nm: '페이스북', desc: 'SNS', useYn: 'Y' },

  PAGE_MAIN:      { id: 'D01001', prefix: 'D01', val: '001', nm: '메인', desc: '페이지 유형', useYn: 'Y' },
  PAGE_POST:      { id: 'D01002', prefix: 'D01', val: '002', nm: '포스트', desc: '페이지 유형', useYn: 'Y' },
  PAGE_CONTENT:   { id: 'D01003', prefix: 'D01', val: '003', nm: '콘텐츠', desc: '페이지 유형', useYn: 'Y' },
  PAGE_CATEGORY:  { id: 'D01004', prefix: 'D01', val: '004', nm: '카테고리', desc: '페이지 유형', useYn: 'Y' },
  PAGE_TAG:       { id: 'D01005', prefix: 'D01', val: '005', nm: '태그', desc: '페이지 유형', useYn: 'Y' },
  PAGE_SEARCH:    { id: 'D01006', prefix: 'D01', val: '006', nm: '검색', desc: '페이지 유형', useYn: 'Y' },

  CRUD_CREATE:    { id: 'E01001', prefix: 'E01', val: '001', nm: '생성', desc: 'CRUD 유형', useYn: 'Y' },
  CRUD_READ:      { id: 'E01002', prefix: 'E01', val: '002', nm: '조회', desc: 'CRUD 유형', useYn: 'Y' },
  CRUD_UPDATE:    { id: 'E01003', prefix: 'E01', val: '003', nm: '수정', desc: 'CRUD 유형', useYn: 'Y' },
  CRUD_DELETE:    { id: 'E01004', prefix: 'E01', val: '004', nm: '삭제', desc: 'CRUD 유형', useYn: 'Y' },

  NICKNAME:       { id: 'F01001', prefix: 'F01', val: '001', nm: '주인장', desc: '닉네임', useYn: 'Y' },
  
  RESPONSE_OK:    { id: 'G01001', prefix: 'G01', val: '001', nm: 'OK', desc: '응답 상태 코드', useYn: 'Y' },
  RESPONSE_NO:    { id: 'G01002', prefix: 'G01', val: '002', nm: 'NO', desc: '응답 상태 코드', useYn: 'Y' },

  COUNTRY_KOREA:  { id: 'H01001', prefix: 'H01', val: '001', nm: 'KR', desc: 'ISO 3166-2 코드(대한민국)', useYn: 'Y' },
  COUNTRY_CHINA:  { id: 'H01002', prefix: 'H01', val: '002', nm: 'CN', desc: 'ISO 3166-2 코드(중국)', useYn: 'Y' },
  COUNTRY_INDO:   { id: 'H01003', prefix: 'H01', val: '003', nm: 'IN', desc: 'ISO 3166-2 코드(인도)', useYn: 'Y' },
  COUNTRY_RUSSIA: { id: 'H01004', prefix: 'H01', val: '004', nm: 'RU', desc: 'ISO 3166-2 코드(러시아)', useYn: 'Y' },

  PASSWORD:       { id: 'I01001', prefix: 'I01', val: '001', nm: '********', desc: '비밀번호', useYn: 'Y' },
};

/** IP 차단 대상의 국가 코드 목록 */
export const countryBlackList = [
  globalCodes.COUNTRY_CHINA.nm,
  globalCodes.COUNTRY_INDO.nm,
  globalCodes.COUNTRY_RUSSIA.nm,
];
