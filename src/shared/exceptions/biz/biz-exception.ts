import { HttpException, HttpStatus } from "@nestjs/common";

/** 비즈니스 로직 예외 Exception */
export class BizException extends HttpException {

  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }

  /** 오류 메시지를 반환한다. */
  getMessage(): string {
    return this.message;
  }

}
