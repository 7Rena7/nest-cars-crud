import { v4 as uuid } from 'uuid';

import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Ford',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Nissan',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Jeep',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Subaru',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Mazda',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Dodge',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'BMW',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Mercedes-Benz',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Audi',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Lexus',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Kia',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Hyundai',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Volkswagen',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Volvo',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Porsche',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Jaguar',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Land Rover',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Mitsubishi',
    createdDate: new Date().getTime(),
  },
];
