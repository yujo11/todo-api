import { IsBoolean, IsIn, IsNumber, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly text: string;

  @IsBoolean()
  readonly completed: boolean;

  //TODO DTO 데코레이터 찾아보기
  @IsString()
  @IsIn(['primary', 'secondary', 'default'])
  readonly priority: 'primary' | 'secondary' | 'default';
}
