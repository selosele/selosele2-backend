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

## 코딩 컨벤션

1. 메소드 명명 규칙
   - 단건 조회: ```get```
   - 다건 조회: ```list```
   - 통계 조회: ```count```
   - 추가: ```add```
   - 수정: ```update```
   - 삭제: ```remove```
   - 추가/수정/삭제: ```save```
   - 예) ```saveUser```
2. 테이블 컬럼명과 1:1로 매칭되는 HTML 태그의 name 속성값의 표기는 카멜케이스를 사용
   - X) ```user_id```
   - O) ```userId```

## 라이브러리 및 기술

- **[완료]** Swagger 적용

## 기능 개편

- SEO 미작업
- 포스트 조회수 삭제
  - view에 표출 삭제
  - 조회수 누적 로직 삭제
  - 조회수 초기화 삭제
- 포스트 카테고리, 태그 임시저장 삭제
- 리캡챠 삭제
- 자동 로그아웃 삭제
- 방문자 위젯 삭제
- 알림 기능 개편
  - Socket.io 실시간 알림 적용
- 메모 기능 완성
  - 에디터 적용
- 메뉴 관리 기능 개편
  - 드래그 앤 드롭 삭제
  - 셀렉트박스로 부모 메뉴 선택할 수 있게
  - 일반 메뉴, 관리자 메뉴 구분
- 페이지네이션 모듈 개발
- 카테고리, 태그 관리 기능 개발
  - 메인 카테고리, 태그 필터링 기능 개발
- 공통코드 관리 기능 개발
- 권한 검증
  - ```hasRole('ROLE_ADMIN')``` 같은 권한 검증 메소드 필요 (프론트에도)
- **[완료]** 개발모드에서만 사용자 생성할 수 있게 하기
  - API를 타면서 운영모드일 경우 예외 던지기
  - 프론트단에서 구분해주는 것도 했음
- **[완료]** 빌더 패턴 적용
  - npm 모듈: ```builder-pattern```

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
- DB 개편 완료 후 ERDCloud에 import하기

## 기타

- 백단에서 Model 만들 때, Interface 말고 Class로 만들어야 함!!
  - ```new```로 인스턴스를 생성해야 하기 때문..
- DTO를 테이블당 1개씩 만드는 게 아니라, 행위별로 만들어야 함!
  - 테이블과 1:1로 대응되는 것은 Entity임
  - 포스트 작성에 대한 DTO인 ```add-post.dto.ts``` 파일을 만들어야 함
- 공통 테이블(user, menu 등)은 조인 조건을 생략한다.
- Spring Security 인증 처리 요청 인터셉트해서 특정 Controller에 공통 처리하는 거 Nest.js에서 ```AuthGuard```로 하면 됨
  - 인증 처리 관련 키워드: ```AuthModule```, ```AuthGuard```
- AS-IS에서 태그명 입력 관련 프론트 JavaScript 삭제 후 시도해도 "중복된 태그명입니다" 뜨는 유효성 검사 출처가 백엔드임
- 좋아요 기능 관련
  - IP 주소를 공개하면 안됨(통신비밀보호법 IP라고 검색)
- 스케줄러, 배치 꼭 써보기
  - 특정 시간대(새벽)에는 서버를 끄고, 아침에 켜는 배치 구성
