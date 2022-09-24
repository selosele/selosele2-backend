# 개인블로그 리뉴얼 프로젝트 (Backend)

## 기본 정보

- 작업기간 : 2022.09.10. ~
- 어플리케이션 명 : selosele2
- Backend : Nest.js
- Frontend : Vue
- DBMS : MariaDB (& TypeORM)
- Port: 3000
- API URI: ```/api/v1/**```
- [백엔드 API 문서](http://localhost:3000/api-docs)
- 백엔드 구동
  - ```npm run start``` (개발)
  - ```npm run start:dev``` (watch 모드)
  - ```npm run start:prod``` (운영)
- module, controller, service 일괄 생성 명령어: ```nest g res```
  - ```nest g res controllers/Users --no-spec``` 명령어를 치면 service, controller, module 파일이 생성됨
- [Frontend 저장소](https://github.com/selosele/selosele2-frontend)
- [AS-IS 저장소](https://github.com/selosele/devblog)

## 코딩 컨벤션

1. 메소드 명명 규칙
   - 단건 조회: ```get```
   - 다건 조회: ```list```
   - 통계 조회: ```count```
   - 추가수정삭제: ```save```
   - 추가: ```add```
   - 수정: ```update```
   - 삭제: ```remove```
   - 예) ```saveUser```

## 라이브러리 및 기술

- **[완료]** Swagger 적용

## 기능 개편

- SEO는 작업하지 않기
- 포스트 조회수 삭제
  - view에 표출 삭제
  - 조회수 누적 로직 삭제
  - 조회수 초기화 삭제
- 리캡챠 삭제
- 자동 로그아웃 삭제
- 방문자 위젯 삭제
- 메모 기능 완성
  - 에디터 적용
- 메뉴 관리 기능 개편
  - 드래그 앤 드롭 삭제
  - 셀렉트박스로 부모 메뉴 선택할 수 있게
- 페이지네이션 모듈 개발
- 메인 카테고리 필터링 기능 개발

## 기타

- Vue로 프론트단 작업 끝낸다음 백엔드 시작하기
- 백단에서 Model 만들 때, Interface 말고 Class로 만들어야 함!!
  - new 키워드를 이용해서 인스턴스를 생성해야 하기 때문..
- Spring Security 인증 처리 요청 인터셉트해서 특정 Controller에 공통 처리하는 거 Nest.js에서 ```AuthGuard```로 하면 됨
  - 인증 처리 관련 키워드: ```AuthModule```, ```AuthGuard```
- AS-IS에서 태그명 입력 관련 프론트 스크립트 삭제 후 시도해도 "중복된 태그명입니다" 뜨는 유효성 검사 출처가 백엔드임
