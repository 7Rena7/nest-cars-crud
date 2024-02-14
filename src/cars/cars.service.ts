import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: '059ece17-94b2-443f-91ff-485cc5201736',
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
  ];

  getCars() {
    return this.cars;
  }

  getOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id !== id) return car;

      carDB = { ...carDB, ...updateCarDto, id };
      return carDB;
    });
    return carDB;
  }

  delete(id: string) {
    const car = this.getOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }

  populateCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
