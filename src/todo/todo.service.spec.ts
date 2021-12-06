import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of todos', async () => {
      const result = await service.findAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('findById', () => {
    it('should return a todo', async () => {
      service.create({
        text: 'test',
        completed: false,
        priority: 'primary',
      });

      const result = await service.findById(1);
      expect(result).toBeDefined();
      expect(result.id).toBe(1);
    });
  });

  describe('deleteById', () => {
    it('should delete a todo', async () => {
      service.create({
        text: 'test',
        completed: false,
        priority: 'primary',
      });

      await service.deleteById(1);
      const result = await service.findAll();

      expect(result.length).toBe(0);
    });

    it('should throw 404 error', () => {
      try {
        service.deleteById(1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toBe('Todo with id 1 not found');
      }
    });
  });

  describe('create', () => {
    it('should create a todo', async () => {
      await service.create({
        text: 'test',
        completed: false,
        priority: 'primary',
      });

      const result = await service.findById(1);

      expect(result).toBeDefined();
      expect(result.id).toBe(1);
    });
  });

  describe('update', () => {
    it('should update a todo', async () => {
      service.create({
        text: 'test',
        completed: false,
        priority: 'primary',
      });

      service.updateById(1, {
        text: 'update',
      });

      const result = await service.findById(1);

      expect(result.text).toBe('update');
    });

    it('should throw 404 error', async () => {
      try {
        service.updateById(1, {
          text: 'update',
        });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toBe('Todo with id 1 not found');
      }
    });
  });
});
