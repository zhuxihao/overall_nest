import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './Login/module';
import { AppMiddleware } from './app.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    LoginModule,
    JwtModule.register({
      secret: 'audia4l',
      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes('*');
  }
}
