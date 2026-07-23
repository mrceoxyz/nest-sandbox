import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { CreateEngineDto } from './create-engine.dto';

export class CreateCarDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsString()
  year: string;

  @ValidateNested()
  @Type(() => CreateEngineDto)
  engine: CreateEngineDto;
}
