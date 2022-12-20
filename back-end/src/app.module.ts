import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middleware/auth/auth.middleware';
import { ConfigModule } from '@nestjs/config';
import { DB } from '../api';

const db = DB
@Module({
  imports: [UsersModule, AuthModule,
            ConfigModule.forRoot({isGlobal: true, envFilePath: `local.env`}),
            MongooseModule.forRoot(`mongodb://${db}/ctnusers`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('');
  }
}
