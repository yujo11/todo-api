import { IsBoolean, IsIn, IsString } from 'class-validator';

export class BaseTodoDto {
  @IsString()
  readonly text: string;

  @IsBoolean()
  readonly completed: boolean;

  @IsString()
  @IsIn(['primary', 'secondary', 'default'])
  readonly priority: 'primary' | 'secondary' | 'default';
}
