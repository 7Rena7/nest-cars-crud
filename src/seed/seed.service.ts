import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDatabase() {
    this.carsService.populateCarsWithSeedData(CARS_SEED);
    this.brandsService.populateBrandsWithSeedData(BRANDS_SEED);
    return 'Database seeded';
  }
}
