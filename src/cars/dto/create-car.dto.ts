/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  make: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum([
    'SUV',
    'Sedan',
    'Hatchback',
    'Coupe',
    'Convertible',
    'Truck',
    'Van',
    'Wagon',
    'EV',
    'Other',
  ])
  type:
    | 'SUV'
    | 'Sedan'
    | 'Hatchback'
    | 'Coupe'
    | 'Convertible'
    | 'Truck'
    | 'Van'
    | 'Wagon'
    | 'EV'
    | 'Other';
}
