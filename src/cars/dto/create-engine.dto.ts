import { IsNumber, IsString } from 'class-validator';

export class CreateEngineDto {
  @IsString()
  engineType: string;

  @IsNumber()
  horsePower: number;

  @IsNumber()
  displacement: number;
}
