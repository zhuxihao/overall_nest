import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { deCrypt } from './utils/crypt';
import { JwtService } from '@nestjs/jwt';

// 顺序 jwt鉴权 / 解密

@Injectable()
export class AppMiddleware implements NestMiddleware {
  @Inject(JwtService)
  private jwtService: JwtService;

  use(req: Request, res: Response, next: () => void) {
    // console.log('开始执行中间件aaa...', req.body, req.originalUrl, req.baseUrl);
    const secretData = req.body.data;
    console.log(req.headers.authorization, 'shili');

    const authorization = req.headers.authorization;
    if (authorization) {
      const authorizationRow = authorization.slice(7);
      const data = this.jwtService.verify(authorizationRow);
      console.log(data, 'jwt');
    }

    if (secretData) {
      const deData = deCrypt(secretData);
      console.log('解密:', deData);
      req.body.data = deData;
    }

    next();
    console.log('结束执行中间件aaa...');
  }
}
