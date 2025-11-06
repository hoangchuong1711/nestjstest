import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
   imports: [MongooseModule.forRoot('mongodb+srv://chuong:123@test.vso3w61.mongodb.net/'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
