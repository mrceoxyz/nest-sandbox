import { Injectable } from '@nestjs/common';
import { CreateCarsDynamicDto } from './dto/create-cars_dynamic.dto';
import { UpdateCarsDynamicDto } from './dto/update-cars_dynamic.dto';

@Injectable()
export class CarsDynamicService {
  create(createCarsDynamicDto: CreateCarsDynamicDto) {
    return 'This action adds a new carsDynamic';
  }

  findAll() {
    return `This action returns all carsDynamic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carsDynamic`;
  }

  update(id: number, updateCarsDynamicDto: UpdateCarsDynamicDto) {
    return `This action updates a #${id} carsDynamic`;
  }

  remove(id: number) {
    return `This action removes a #${id} carsDynamic`;
  }
}
