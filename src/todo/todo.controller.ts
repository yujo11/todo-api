import { TodoService } from './todo.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number): Todo {
    return this.todoService.findById(id);
  }

  @Post()
  create(@Body() todoData: CreateTodoDto) {
    return this.todoService.create(todoData);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.todoService.deleteById(id);
  }

  @Patch('/:id')
  updateById(@Param('id') id: number, @Body() todoData: CreateTodoDto) {
    return this.todoService.updateById(id, todoData);
  }
}
