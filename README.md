# selosele2-backend

## 작업기간

- 2022.09.10. ~ 2023.02.19.

## 기술스택 및 개발환경

- `NestJS` - v9.0.0
- `TypeORM` - v0.3.10
- `Vue.js` - v3.2.13
- `MariaDB` - v10.6.12
- `Redis` - v3.0.504
- `WSL2` - Ubuntu 22.04 LTS

## 개발환경 구동 절차

1. `redis-server` (Redis 구동)
2. `sudo service mariadb start` (MariaDB 구동)
3. `nvm use 16.14.2` (Node.js 버전 스위칭)
4. `npm run start:dev` (백엔드 구동)
5. `npm start` (프론트엔드 구동)

## 운영환경 구동 절차

1. `npm start` (백엔드 구동)
    - PM2로 백그라운드 실행하며, Node.js 16.14.2 버전의 인터프리터로 애플리케이션을 실행하도록 설정함
      - `nvm use 16.14.2` 명령 실행 필요하지 않음
    - 환경변수 변경 시, `pm2 restart main --update-env` 명령 실행 (새 환경변수 값으로 애플리케이션을 재실행)

## etc.

- [API 문서 (로컬)](http://localhost:3000/api-docs)
- [Frontend 저장소](https://github.com/selosele/selosele2-frontend)
