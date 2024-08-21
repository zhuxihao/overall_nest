import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  // @Inject(JwtService)
  // private jwtService: JwtService;

  login(dto): string {
    console.log(dto, 'dto');
    // const token = this.jwtService.sign({
    //   userName: dto.phone,
    // });
    return 'token';
  }
}
