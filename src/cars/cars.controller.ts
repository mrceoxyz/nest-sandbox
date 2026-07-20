import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { CreateEngineDto } from './dto/create-engine.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.getAllCar();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.getCarByID(+id);
  }

  @Get('model/:model')
  findCarModel(@Param('model') model: string) {
    return this.carsService.getCarByModel(model);
  }

  @Get('make/:make')
  findCarMake(@Param('make') make: string) {
    return this.carsService.getCarByMake(make);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }

  @Post('engine')
  createEngine(@Body() createEngineDto: CreateEngineDto) {
    return this.carsService.createEngine(createEngineDto);
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return this.carsService.deleteCar(+id);
  }
}
