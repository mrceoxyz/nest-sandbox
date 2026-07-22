import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarsDynamicService } from './cars_dynamic.service';
import { CreateCarsDynamicDto } from './dto/create-cars_dynamic.dto';
import { UpdateCarsDynamicDto } from './dto/update-cars_dynamic.dto';

@Controller('cars-dynamic')
export class CarsDynamicController {
  constructor(private readonly carsDynamicService: CarsDynamicService) {}

  @Post()
  create(@Body() createCarsDynamicDto: CreateCarsDynamicDto) {
    return this.carsDynamicService.create(createCarsDynamicDto);
  }

  @Get()
  findAll() {
    return this.carsDynamicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsDynamicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarsDynamicDto: UpdateCarsDynamicDto) {
    return this.carsDynamicService.update(+id, updateCarsDynamicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsDynamicService.remove(+id);
  }
}
