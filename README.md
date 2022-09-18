# 개인블로그 리뉴얼 프로젝트 (Frontend)

## 기본정보

- 작업기간 : 2022.09.10. ~
- 어플리케이션 명 : selosele2
- Backend : Nest.js
- Frontend : Vue
- DBMS : MariaDB (& TypeORM)
- Port: 3000
- [백엔드 API 문서](/api-docs)
- 백엔드 구동
  - ```npm run start``` (개발)
  - ```npm run start:dev``` (watch 모드)
  - ```npm run start:prod``` (운영)
- module, controller, service 일괄 생성 명령어: ```nest g res```
- [Frontend 저장소](https://github.com/selosele/selosele2-frontend)

## 라이브러리 및 기술

- **[완료]** Swagger 적용

## 기능개편
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
- 페이지네이션 모듈 개발

## 기타

- Vue로 프론트단 작업 끝낸다음 백엔드 시작하기
- 백단에서 Model 만들 때, Interface 말고 Class로 만들어야 함!!
  - new 키워드를 이용해서 인스턴스를 생성해야 하기 때문..
