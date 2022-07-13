import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './tasks-status.enum';
import { TasksService } from './tasks.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './task.entity';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @ApiResponse({ status: 200 })
  // @Get()
  // getTasks(@Query() filter: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filter).length) {
  //     return this.tasksService.getTaskWithFilter(filter);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  @ApiResponse({ status: 200 })
  @Get('/:id')
  getTaskById(@Param('id') id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // @ApiResponse({ status: 200 })
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  @ApiResponse({ status: 201 })
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  // @ApiResponse({ status: 200 })
  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.tasksService.deleteTask(id);
  // }

  // @ApiResponse({ status: 200 })
  // @Patch('/:id/status')
  // updataTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status') status: TaskStatus,
  // ): Task {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
