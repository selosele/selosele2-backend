# 기본 이미지로 Node.js 16.14.2 사용
FROM node:16.14.2-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 의존성 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm ci --only=production

# 소스 코드 복사
COPY . .

# 소스 코드를 빌드
RUN npm run build

# 앱 실행
CMD ["node", "./dist/main.js"]
