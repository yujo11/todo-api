import { TodoService } from './todo.service';
import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
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
  findById(id: number): Todo {
    return this.todoService.findById(id);
  }

  @Post()
  create(todoData: CreateTodoDto) {
    return this.todoService.create(todoData);
  }

  @Delete('/:id')
  deleteById(id: number) {
    return this.todoService.deleteById(id);
  }

  @Patch('/:id')
  updateById(id: number, todoData: CreateTodoDto) {
    return this.todoService.updateById(id, todoData);
  }
}
