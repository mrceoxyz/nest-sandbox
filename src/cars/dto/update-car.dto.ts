/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsNotEmpty()
  make: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  year: number;
}
