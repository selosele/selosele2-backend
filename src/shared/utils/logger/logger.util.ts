import { LogLevel } from "@nestjs/common";

/** 로그 레벨 설정 유틸 */
export function getLogLevels(nodeEnv: string): LogLevel[] {
  if ('development' === nodeEnv) {
    return ['log', 'debug', 'error', 'verbose', 'warn'];
  }
  
  if ('production' === nodeEnv) {
    return ['error', 'warn'];
  }
}
