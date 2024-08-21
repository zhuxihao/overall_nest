import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  @Inject(JwtService)
  private jwtService: JwtService;

  getHello(): string {
    return 'Hello Wor12321321ld!';
  }

  login(dto): string {
    console.log(dto, 'dto');
    const data = JSON.parse(dto.data);
    const token = this.jwtService.sign({
      userName: data.phone,
    });
    console.log(token, 'zhijie');
    return `bearer ${token}`;
  }
}
