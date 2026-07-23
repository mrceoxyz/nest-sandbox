import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Engine } from './entities/engine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Engine])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
