import { Injectable, NotFoundException } from '@nestjs/common';
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

  deleteOne(id: number): boolean {
    const todo = this.findById(id);

    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    this.todos = this.todos.filter((todo) => todo.id !== id);

    return true;
  }

  // create(todoData) {

  // }

  // update() {

  // }
}
