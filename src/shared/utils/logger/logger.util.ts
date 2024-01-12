import { LogLevel } from "@nestjs/common";

/** 로그 레벨을 반환한다. */
export function getLogLevels(nodeEnv: string): LogLevel[] {
  if ('development' === nodeEnv) {
    return ['log', 'debug', 'error', 'verbose', 'warn'];
  }
  
  if ('production' === nodeEnv) {
    return ['error', 'warn'];
  }
}
