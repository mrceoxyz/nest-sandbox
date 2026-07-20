/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { CreateEngineDto } from './dto/create-engine.dto';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2026 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2024 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2022 },
    { id: 4, make: 'Tesla', model: 'Model 3', year: 2025 },
    { id: 5, make: 'Tesla', model: 'Model X', year: 2024 },
    { id: 6, make: 'Tesla', model: 'Model Y', year: 2026 },
    { id: 7, make: 'Tesla', model: 'Model S', year: 2020 },
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

  getAllCar() {
    const cars = this.cars.map((car) => car);

    const engines = this.engine.filter((engine) =>
      cars.some((car) => car.id === engine.carID),
    );

    return cars.map((car) => {
      const engine = engines.find((engine) => engine.carID === car.id);
      return {
        ...car,
        engine,
      };
    });
  }

  getCarByID(id: number) {
    const car = this.cars.find((car) => car.id === id);
    const engine = this.engine.find((engine) => engine.carID === car?.id);
    return {
      car,
      engine,
    };
  }

  getCarByModel(model: string) {
    const car = this.cars.find(
      (car) => car.model.toLowerCase() === model.toLowerCase(),
    );
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
    const engines = this.engine.filter((engine) =>
      cars.some((car) => car.id === engine.carID),
    );
    return {
      cars,
      engines,
    };
  }

  createCar(createCarDto: CreateCarDto) {
    const car = {
      id: this.cars.length + 1,
      ...createCarDto,
    };
    this.cars.push(car);
    return {
      message: 'Car created',
      ...car,
    };
  }

  createEngine(createEngineDto: CreateEngineDto) {
    const engine = {
      id: this.engine.length + 1,
      carID: this.cars.length,
      ...createEngineDto,
    };
    this.engine.push(engine);
    return {
      message: 'Engine created',
      ...engine,
    };
  }

  deleteCar(id: number) {
    const car = this.cars.splice(+id, 1);
    return {
      message: 'Car deleted',
      ...car,
    };
  }
}
