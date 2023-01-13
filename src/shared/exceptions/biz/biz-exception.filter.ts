import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { BizException } from './biz.exception';

@Catch(BizException)
export class BizExceptionFilter implements ExceptionFilter {
  
  catch(exception: BizException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.getMessage(),
        type: 'biz'
      });
  }
  
}
