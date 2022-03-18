import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [
        TasksService,
        MongooseModule.forFeature([
        { name: 'Task', schema: TaskSchema }
    ])],
    exports: [
        TasksService
    ],
    controllers: [TasksController],
    providers: [TasksService]
})

export class TasksModule { }
