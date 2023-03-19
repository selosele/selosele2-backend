# 개인블로그 리뉴얼 프로젝트 (Backend)

## 기본 정보

- 작업기간: 2022.09.10. ~
- 어플리케이션 명: selosele2
- Backend: Nest.js
- Frontend: Vue
- DBMS: MariaDB
- ORM: TypeORM
- Port: 3000
- API URI: ```/api/**```
- [백엔드 API 문서](http://localhost:3000/api-docs)
- 백엔드 구동
  - ```npm run start``` (개발)
  - ```npm run start:dev``` (watch 모드)
  - ```npm run start:prod``` (운영)
    - 추후 ```npm start```로 매핑해야 함!
- module, controller, service 일괄 생성 명령어: ```nest g res```
  - ```nest g res Users --no-spec``` 명령어를 치면 service, controller, module 파일이 생성됨
- [Frontend 저장소](https://github.com/selosele/selosele2-frontend)
- [AS-IS 저장소](https://github.com/selosele/devblog)
- Redis 접속 예시
  1. 레디스 설치 경로 - ```D:\prog\redis```로 이동
  2. redis-cli -h 호스트명 -p 포트번호 -a 비밀번호
