import { Test, TestingModule } from '@nestjs/testing';
import { CarsDynamicService } from './cars_dynamic.service';

describe('CarsDynamicService', () => {
  let service: CarsDynamicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsDynamicService],
    }).compile();

    service = module.get<CarsDynamicService>(CarsDynamicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
