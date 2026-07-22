/* eslint-disable @typescript-eslint/no-unsafe-call */
// /* eslint-disable @typescript-eslint/no-unsafe-call */
// import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

// export class UpdateCarDto {
//   @IsString()
//   @IsNotEmpty()
//   make: string;

//   @IsString()
//   @IsNotEmpty()
//   model: string;

//   @IsNotEmpty()
//   @IsNumber()
//   year: number;
// }

import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {}
