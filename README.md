# 개인블로그 리뉴얼 프로젝트 (Backend)

## 기본 정보

- 작업기간 : 2022.09.10. ~
- 어플리케이션 명 : selosele2
- Backend : Nest.js
- Frontend : Vue
- DBMS : MariaDB (& TypeORM)
- Port: 3000
- API URI: ```/api/**```
- [백엔드 API 문서](http://localhost:3000/api-docs)
- 백엔드 구동
  - ```npm run start``` (개발)
  - ```npm run start:dev``` (watch 모드)
  - ```npm run start:prod``` (운영)
- module, controller, service 일괄 생성 명령어: ```nest g res```
  - ```nest g res Users --no-spec``` 명령어를 치면 service, controller, module 파일이 생성됨
- [Frontend 저장소](https://github.com/selosele/selosele2-frontend)
- [AS-IS 저장소](https://github.com/selosele/devblog)

## 기능 개편

- SEO 미작업
- 포스트 조회수 삭제
  - view에 표출 삭제
  - 조회수 누적 로직 삭제
  - 조회수 초기화 삭제
- 포스트 카테고리, 태그 임시저장 삭제
- 리캡챠 삭제
- 메모 기능 완성
  - 에디터 적용
- 메뉴 관리 기능 개편
  - 드래그 앤 드롭 삭제
  - 셀렉트박스로 부모 메뉴 선택할 수 있게
  - 일반 메뉴, 관리자 메뉴 구분
- 페이지네이션 모듈 개발
- **[완료]** 방문자 위젯 삭제
- 카테고리, 태그 관리 기능 개발
- 메인 카테고리, 태그 필터링 기능 개발

## DB 개편

- **[완료]** 공통코드 테이블 생성
- **[완료]** 권한 테이블 생성
- **[완료]** 사용자 권한 테이블 생성
  - 계정 생성 시, 익명 사용자 권한이랑 관리자 권한을 모두 부여해야 함
- **[완료]** 포스트 카테고리 테이블 생성
- ```text``` 타입은 메모리를 많이 차지하고, 인덱스의 일부로 쓰일 수 없으니 ```varchar```로 변경
  - ```char``` 타입도 사용해보기 (여부 컬럼 같은 거에만 사용)
- **[완료]** 포스트 테이블에서 카테고리를 별도 테이블로 분리
  - 포스트 카테고리, 태그 임시저장 테이블 삭제
  - 카테고리, 태그가 별도의 테이블로 완전히 분리되어야 함
    - 현재 만든 ```post_category``` 테이블은 카테고리의 고유한 정보가 아님
    - ```category```, ```tag``` 테이블이 필요함
    - 즉, ```post``` 테이블과 ```category``` 테이블 사이에 ```post_category``` 테이블이 존재하는 구조가 되어야 함
- **[완료]** 방문자 테이블 삭제
- DB 개편 후 ERDCloud에 import하기
