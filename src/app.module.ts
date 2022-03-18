import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // TasksModule, 
    MongooseModule.forRoot('mongodb+srv://uniondeveloper:uniondeveloper2021$$@cluster0.9xkag.mongodb.net/tienda-union?retryWrites=true&w=majority&ssl=true', {
    useNewUrlParser: true
  })],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule { }
