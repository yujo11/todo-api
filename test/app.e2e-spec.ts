import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my TODO API');
  });

  describe('/todo', () => {
    it('GET', () => {
      return request(app.getHttpServer()).get('/todo').expect(200).expect([]);
    });

    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/todo')
        .send({
          text: 'test',
          completed: false,
          priority: 'primary',
        })
        .expect(201);
    });

    // TODO UpdateDto 재정의 후 작성
    it.todo('POST 400');
  });

  describe('/todo/:id', () => {
    it.todo('GET');
  });
});
