import { IsBoolean, IsIn, IsNumber, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly text: string;

  @IsBoolean()
  readonly completed: boolean;

  @IsIn(['primary', 'secondary', 'default'])
  readonly priority: 'primary' | 'secondary' | 'default';
}
