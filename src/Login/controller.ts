import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login111')
  login(@Body() LoginDto: any): string {
    return this.loginService.login(LoginDto);
  }
}
