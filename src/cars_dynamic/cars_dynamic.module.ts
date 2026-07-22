import { Module } from '@nestjs/common';
import { CarsDynamicService } from './cars_dynamic.service';
import { CarsDynamicController } from './cars_dynamic.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CarsDynamicController],
  providers: [CarsDynamicService],
})
export class CarsDynamicModule {}
