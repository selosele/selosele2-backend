import { INestApplication } from '@nestjs/common';

/** Cors 유틸 */
export const setupCors = (app: INestApplication): void => {
  app.enableCors({
    origin: process.env.LOC_ORIGIN,
    methods: 'GET,POST,PUT,DELETE', // 허용할 Request Method
    credentials: true,
  });
};
