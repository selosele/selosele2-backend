import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { lookup } from 'geoip-lite';

/**
 * 클라이언트 IP 주소를 반환하는 데코레이터
 * 
 * 사용 예시
 *   - @Ip() ip: string
 */
export const Ip = createParamDecorator((data: unknown, context: ExecutionContext): string => {
  const req = context.switchToHttp().getRequest<Request>();

  const ip = req.headers['x-forwarded-for'] as string || req.connection.remoteAddress;
  console.log(lookup(ip));

  return ip;
});
