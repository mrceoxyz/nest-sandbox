import { Test, TestingModule } from '@nestjs/testing';
import { CarsDynamicController } from './cars_dynamic.controller';
import { CarsDynamicService } from './cars_dynamic.service';

describe('CarsDynamicController', () => {
  let controller: CarsDynamicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsDynamicController],
      providers: [CarsDynamicService],
    }).compile();

    controller = module.get<CarsDynamicController>(CarsDynamicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
