import { INestApplication, NotFoundException } from '@nestjs/common';

/** Cors 유틸 */
export const setupCors = (app: INestApplication): void => {
  const whitelist = [process.env.LOC_ORIGIN];
  
  if ('development' === process.env.NODE_ENV) {
    whitelist.push('http://localhost:8080');
  }

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || -1 !== whitelist.indexOf(origin)) {
        callback(null, true);
      } else {
        callback(new NotFoundException());
      }
    },
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: 'GET,POST,PUT,DELETE', // 허용할 Request Method
    credentials: true,
  });
};
