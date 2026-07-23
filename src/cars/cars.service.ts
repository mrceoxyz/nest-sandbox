import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Car } from './entities/car.entity';
import { Engine } from './entities/engine.entity';

import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,

    @InjectRepository(Engine)
    private readonly engineRepository: Repository<Engine>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    const { engine, ...carData } = createCarDto;

    const newEngine = this.engineRepository.create(engine);
    await this.engineRepository.save(newEngine);

    const car = this.carRepository.create({
      ...carData,
      engine: newEngine,
    });

    return await this.carRepository.save(car);
  }

  async findAll() {
    return await this.carRepository.find({
      relations: {
        engine: true,
      },
    });
  }

  async findOne(id: number) {
    const car = await this.carRepository.findOne({
      where: { id },
      relations: {
        engine: true,
      },
    });

    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const car = await this.carRepository.findOne({
      where: { id },
      relations: {
        engine: true,
      },
    });

    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    if (updateCarDto.engine) {
      Object.assign(car.engine, updateCarDto.engine);
      await this.engineRepository.save(car.engine);
    }

    Object.assign(car, updateCarDto);

    return await this.carRepository.save(car);
  }

  async remove(id: number) {
    const car = await this.findOne(id);

    await this.carRepository.remove(car);

    return {
      message: 'Car deleted successfully',
    };
  }
}
