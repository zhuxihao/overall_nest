import { Module } from '@nestjs/common';
import { LoginController } from './controller';
import { LoginService } from './service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
