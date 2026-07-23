import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './car.entity';

@Entity()
export class Engine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  engineType: string;

  @Column()
  horsePower: number;

  @Column()
  displacement: number;

  @OneToOne(() => Car, (car) => car.engine)
  car: Car;
}
