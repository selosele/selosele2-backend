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
- `MariaDB` - v10.6.18
- `Redis` - v3.0.504
- `WSL2` - Ubuntu 22.04 LTS
- `Docker` - v24.0.2
  - 운영 환경에서만 사용

## 개발환경 구동 절차

1. `redis-server` (Redis 구동)
2. `service mariadb start` (MariaDB 구동)
3. `npm install` (패키지 설치)
4. `npm run start:dev` (백엔드 구동)

## 운영환경 구동 절차

1. `docker-compose up -d` (Docker 컨테이너 실행)

## etc.

- [API 문서 (로컬)](http://localhost:3000/api-docs)
- [Frontend 저장소](https://github.com/selosele/selosele2-frontend)
