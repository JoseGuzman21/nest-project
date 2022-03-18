import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) { }

    @Get()
    async getTasks(): Promise<{ statusCode: number, data: Task[], message: string }> {
        const tasks: Task[] = await this.taskService.getTasks();
        return { statusCode: 200, data: tasks, message: 'Get all tasks' };
    }

    @Get(':taskId')
    async getTaskByTaskId(@Param('taskId') taskId): Promise<{ statusCode: number, data: Task, message: string }> {
        const task: Task = await this.taskService.getTask(taskId);
        return { statusCode: 200, data: task, message: 'Get task' };
    }

    @Post()
    async addTask(@Body() task: CreateTaskDto): Promise<{ statusCode: number, data: Task, message: string }> {
        const taskAdded: Task = await this.taskService.createTask(task);
        return { statusCode: 201, data: taskAdded, message: 'Added successfully' };
    }

    @Put(':taskId')
    putTask(@Body() task: CreateTaskDto, @Param('taskId') taskId): { data: {}, message: string, statusCode: number } {
        return { data: { taskId, data: task }, message: 'Task updated', statusCode: 200 };
    }

    @Delete(':taskId')
    deleteTask(@Param('taskId') taskId: number): { data: {}, message: string, statusCode: number } {
        console.log(taskId);
        return { data: { taskId }, message: 'Task deleted', statusCode: 200 };
    }
}
