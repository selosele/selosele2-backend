# selosele2-backend

## 접속 URL

- https://blog.selosele.com
- https://blog-selosele.vercel.app (위 URL로 접속 안될 시)

## 작업기간

- 2022.09.10. ~ 2023.02.19.

## 기술스택 및 개발환경 (백엔드)

- `Node.js` - v16.14.2
- `NestJS` - v9.0.0
- `TypeORM` - v0.3.10
- `MariaDB` - v10.6.12
- `Redis` - v3.0.504
- `WSL2` - Ubuntu 22.04 LTS
- `Docker` - v24.0.2
  - 운영 환경에서만 사용

## 개발환경 구동 절차

1. `redis-server` (Redis 구동)
2. `sudo service mariadb start` (MariaDB 구동)
3. `npm run start:dev` (백엔드 구동)
4. `npm start` (프론트엔드 구동)

## 운영 환경 구동 절차

### Docker 컨테이너 구동
1. `docker-compose up -d` (Docker Compose 실행)

### Ubuntu에서 백엔드 직접 구동
1. `npm start` (백엔드 구동)
    - PM2로 백그라운드 실행하며, Node.js 16.14.2 버전의 인터프리터로 애플리케이션을 실행하도록 설정함
      - `nvm use` 명령 실행 필요하지 않음
    - 환경변수 변경 시, `pm2 reload main --update-env` 명령 실행 (새 환경변수 값으로 애플리케이션을 재시작)

## etc.

- 운영 환경 로그 출력 명령: `pm2 logs main`
- [API 문서 (로컬)](http://localhost:3000/api-docs)
- [Frontend 저장소](https://github.com/selosele/selosele2-frontend)
