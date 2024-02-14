import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: 'a2ae3d99-b37c-429a-adb7-df0fd4c4fb0e',
    //   name: 'Toyota',
    //   createdDate: new Date().getTime(),
    // },
  ];

  create({ name }: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdDate: new Date().getTime(),
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id '${id}' not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    const index = this.brands.indexOf(brand);
    this.brands[index] = {
      ...brand,
      ...updateBrandDto,
      lastUpdatedDate: new Date().getTime(),
      id,
    };
    return this.brands[index];
  }

  remove(id: string) {
    const brand = this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return brand;
  }

  populateBrandsWithSeedData(brands: Brand[]) {
    console.log('brands', brands);
    this.brands = brands;
  }
}
