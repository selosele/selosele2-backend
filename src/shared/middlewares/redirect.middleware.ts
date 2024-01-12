import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';

@Injectable()
export class RedirectMiddleware implements NestMiddleware {

  constructor(
    private readonly config: ConfigService,
  ) {}

  use(req: Request, resp: Response, next: () => void): void {
    const origin = this.config.get<string>('LOC_ORIGIN');
    const host = req.get('host');

    if (host === 'http://www.blog.selosele.com') {
      return resp.redirect(301, `${origin}${req.url}`);
    }
    next();
  }

}
