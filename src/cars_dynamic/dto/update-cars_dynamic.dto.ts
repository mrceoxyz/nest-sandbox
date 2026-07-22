import { PartialType } from '@nestjs/mapped-types';
import { CreateCarsDynamicDto } from './create-cars_dynamic.dto';

export class UpdateCarsDynamicDto extends PartialType(CreateCarsDynamicDto) {}
