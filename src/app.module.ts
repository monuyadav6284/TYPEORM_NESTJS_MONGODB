import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'typeorm',
      useNewUrlParser: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
