import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),

        entities: [join(process.cwd(), 'dist/**/*.entity.{js,ts}')],

        autoLoadEntities: true,
        synchronize: true,

        // Required if your PostgreSQL provider (e.g. Neon, Supabase, Render, Railway)
        // requires SSL. Remove if connecting to a local database.
        ssl:
          process.env.NODE_ENV === 'production'
            ? { rejectUnauthorized: false }
            : false,
      }),
    }),

    CitiesModule,

    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
