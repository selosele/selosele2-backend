import { LogLevel } from '@nestjs/common';
import { isDev, isProd } from '../common/common.util';

/** 로그 레벨을 반환한다. */
export function getLogLevels(nodeEnv: string): LogLevel[] {
  if (isDev(nodeEnv)) {
    return ['log', 'debug', 'error', 'verbose', 'warn'];
  } else if (isProd(nodeEnv)) {
    return ['error', 'warn'];
  }
}
