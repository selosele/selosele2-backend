import { INestApplication } from '@nestjs/common';

/** Cors 유틸 */
export const setupCors = (app: INestApplication): void => {
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://blog-selosele.koyeb.app'
    ],
    methods: 'GET,POST,PUT,DELETE', // 허용할 Request Method
    credentials: true,
  });
};
