import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { CreateEngineDto } from './dto/create-engine.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsGuard } from './cars.guard';
import { UseGuards } from '@nestjs/common';
@Controller('cars')
@UseGuards(CarsGuard)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.getAllCar();
  }

  @Get('engine')
  @UseGuards(CarsGuard)
  findEngine() {
    return this.carsService.getEngine();
  }

  @Get(':id')
  @UseGuards(CarsGuard)
  findOne(@Param('id') id: string) {
    return this.carsService.getCarByID(+id);
  }

  @Get('model/:model')
  @UseGuards(CarsGuard)
  findCarModel(@Param('model') model: string) {
    return this.carsService.getCarByModel(model);
  }

  @Get('make/:make')
  @UseGuards(CarsGuard)
  findCarMake(@Param('make') make: string) {
    return this.carsService.getCarByMake(make);
  }

  @Post()
  @UseGuards(CarsGuard)
  createCar(@Body(new ValidationPipe()) createCarDto: CreateCarDto) {
    return this.carsService.createCar(createCarDto);
  }

  @Post('engine')
  @UseGuards(CarsGuard)
  createEngine(@Body(new ValidationPipe()) createEngineDto: CreateEngineDto) {
    return this.carsService.createEngine(createEngineDto);
  }

  @Delete(':id')
  @UseGuards(CarsGuard)
  deleteCar(@Param('id') id: string) {
    return this.carsService.deleteCar(+id);
  }

  @Put(':id')
  @UseGuards(CarsGuard)
  editCar(@Param('id') id: number, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.editCar(id, updateCarDto);
  }
}
