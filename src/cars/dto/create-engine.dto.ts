/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateEngineDto {
  @IsString()
  @IsNotEmpty()
  size: string;

  @IsString()
  @IsNotEmpty()
  cc: string;

  @IsString()
  @IsNotEmpty()
  fuelType: string;

  @IsString()
  @IsNotEmpty()
  power: string;

  @IsString()
  @IsNotEmpty()
  torque: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsBoolean()
  @IsNotEmpty()
  isEv: boolean;
}
