import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Request, Response } from 'express';
@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): { message: string } {
    return { message: 'Get task' };
  }

  @Post()
  addTask(@Body() task: CreateTaskDto): string {
    console.log(task.title);
    console.log(task.descripcion);
    console.log(task.done);
    console.log(task);
    return 'add Tasks';
  }

  @Put(':taskId')
  putTask(@Body() task: CreateTaskDto, @Param('taskId') taskId): { data: {}, message: string, statusCode: number } {
    return { data: { taskId, data: task }, message: 'Task updated', statusCode: 200 };
  }

  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId): { data: {}, message: string, statusCode: number } {
    console.log(taskId);
    return { data: { taskId }, message: 'Task deleted', statusCode: 200 };
  }
}
