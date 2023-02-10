import { INestApplication, NotFoundException } from '@nestjs/common';

/** Cors 유틸 */
export function setupCors(app: INestApplication): void {
  const whitelist = [process.env.LOC_ORIGIN];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || -1 !== whitelist.indexOf(origin)) {
        callback(null, true);
      } else {
        callback(new NotFoundException());
      }
    },
    allowedHeaders: ['Content-Type', 'Authorization'], // 허용할 Header
    methods: 'GET,POST,PUT,DELETE', // 허용할 Request Method
    credentials: true, // 요청에 인증 정보를 담아서 보낼지 여부
  });
}
