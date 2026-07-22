import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { DatabaseModule } from './database/database.module';
import { CarsDynamicModule } from './cars_dynamic/cars_dynamic.module';

@Module({
  imports: [CarsModule, DatabaseModule, CarsDynamicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
