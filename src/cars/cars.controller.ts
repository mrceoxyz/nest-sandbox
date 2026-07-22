/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsGuard } from './cars.guard';
import { UseGuards } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
@Controller('cars')
@UseGuards(CarsGuard)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll(
    @Query('type') type?: 'Sedan' | 'SUV' | 'Truck' | 'Van' | 'EV' | 'Other',
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.carsService.getAllCar(type);
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
  createCar(@Body() createCarDto: Prisma.CarCreateInput) {
    return this.carsService.createCar(createCarDto);
  }

  // @Post('engine')
  // @UseGuards(CarsGuard)
  // createEngine(@Body() createEngineDto: CreateEngineDto) {
  //   return this.carsService.createEngine(createEngineDto);
  // }

  @Delete(':id')
  @UseGuards(CarsGuard)
  deleteCar(@Param('id') id: string) {
    return this.carsService.deleteCar(+id);
  }

  // @Put(':id')
  // @UseGuards(CarsGuard)
  // editCar(
  //   @Param('id') id: number,
  //   @Body() updateCarDto: Prisma.CarUpdateInput,
  // ) {
  //   return this.carsService.editCar(id, updateCarDto);
  // }
}
