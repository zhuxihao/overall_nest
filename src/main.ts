import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CryptoInterceptor } from './interceptor/interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.useGlobalInterceptors(new CryptoInterceptor());
  await app.listen(3000);
}
bootstrap();
