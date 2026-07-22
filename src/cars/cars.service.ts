/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CarsService {
  constructor(private readonly databaseService: DatabaseService) {}
  private cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2026, type: 'SEDAN' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2024, type: 'SEDAN' },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2022, type: 'SUV' },
    { id: 4, make: 'Tesla', model: 'Model 3', year: 2025, type: 'EV' },
    { id: 5, make: 'Tesla', model: 'Model X', year: 2024, type: 'EV' },
    { id: 6, make: 'Tesla', model: 'Model Y', year: 2026, type: 'EV' },
    { id: 7, make: 'Tesla', model: 'Model S', year: 2020, type: 'EV' },
    { id: 8, make: 'Tesla', model: 'Cybertruck', year: 2022 },
  ];

  private engine = [
    {
      id: 1,
      carID: 1,
      size: '2.5L',
      cc: '2500cc',
      fuelType: 'Petrol',
      power: '180hp',
      torque: '230Nm',
      type: 'Inline 4',
      isEv: false,
    },
    {
      id: 2,
      carID: 2,
      size: '1.5L',
      cc: '1500cc',
      fuelType: 'Petrol',
      power: '120hp',
      torque: '150Nm',
      type: 'Inline 4',
      isEv: false,
    },
    {
      id: 3,
      carID: 3,
      size: '5.0L',
      cc: '5000cc',
      fuelType: 'Petrol',
      power: '450hp',
      torque: '600Nm',
      type: 'V8',
      isEv: false,
    },
    {
      id: 4,
      carID: 4,
      size: '',
      cc: '',
      fuelType: 'Electric',
      power: '450hp',
      torque: '600Nm',
      type: 'Electric',
      isEv: true,
    },
    {
      id: 5,
      carID: 5,
      size: '',
      cc: '',
      fuelType: 'Electric',
      power: '450hp',
      torque: '600Nm',
      type: 'Electric',
      isEv: true,
    },
    {
      id: 6,
      carID: 6,
      size: '',
      cc: '',
      fuelType: 'Electric',
      power: '450hp',
      torque: '600Nm',
      type: 'Electric',
      isEv: true,
    },
    {
      id: 7,
      carID: 7,
      size: '',
      cc: '',
      fuelType: 'Electric',
      power: '450hp',
      torque: '600Nm',
      type: 'Electric',
      isEv: true,
    },
    {
      id: 8,
      carID: 8,
      size: '',
      cc: '',
      fuelType: 'Electric',
      power: '450hp',
      torque: '600Nm',
      type: 'Electric',
      isEv: true,
    },
  ];

  getAllCar(type?: 'Sedan' | 'SUV' | 'Truck' | 'Van' | 'EV' | 'Other') {
    if (type) {
      return this.databaseService.car.findMany({
        where: {
          type,
        },
      });
    }
    return this.databaseService.car.findMany();
  }

  getEngine() {
    return this.engine.map((engine) => {
      return {
        ...engine,
        car: this.cars.find((car) => car.id === engine.carID),
      };
    });
  }

  getCarByID(id: number) {
    return this.databaseService.car.findUnique({
      where: {
        id,
      },
    });
  }

  getCarByModel(model: string) {
    const car = this.cars.find(
      (car) => car.model.toLowerCase() === model.toLowerCase(),
    );
    if (!car) {
      throw new NotFoundException(`Car with model ${model} not found`);
    }
    const engine = this.engine.find((engine) => engine.carID === car?.id);
    return {
      car,
      engine,
    };
  }

  getCarByMake(make: string) {
    const cars = this.cars.filter(
      (car) => car.make.toLowerCase() === make.toLowerCase(),
    );
    if (!cars.length) {
      throw new NotFoundException(`Car with make ${make} not found`);
    }
    const engines = this.engine.filter((engine) =>
      cars.some((car) => car.id === engine.carID),
    );
    return {
      cars,
      engines,
    };
  }

  async createCar(createCarDto: Prisma.CarCreateInput) {
    return this.databaseService.car.create({
      data: createCarDto,
    });
  }

  // createEngine(createEngineDto: CreateEngineDto) {
  //   const engine = {
  //     id: this.engine.length + 1,
  //     carID: this.cars.length,
  //     ...createEngineDto,
  //   };
  //   this.engine.push(engine);
  //   return {
  //     message: 'Engine created',
  //     ...engine,
  //   };
  // }

  async deleteCar(id: number) {
    return this.databaseService.car.delete({
      where: {
        id,
      },
    });
  }

  async editCar(id: number, updateCarDto: Prisma.CarUpdateInput) {
    return this.databaseService.car.update({
      where: {
        id,
      },
      data: updateCarDto,
    });
  }
}
