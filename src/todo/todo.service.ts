import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  findById(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    return todo;
  }

  deleteById(id: number): boolean {
    const todo = this.findById(id);

    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    this.todos = this.todos.filter((todo) => todo.id !== id);

    return true;
  }

  create(todoData: CreateTodoDto) {
    this.todos.push({
      id: Date.now(),
      ...todoData,
    });
  }

  updateById(id: number, updateData: UpdateTodoDto) {
    const todo = this.findById(id);
    this.deleteById(id);
    this.todos.push({ ...todo, ...updateData });
  }
}
