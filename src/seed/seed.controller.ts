import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  // Create database seed for local testing
  @Get()
  populateDatabase() {
    return this.seedService.populateDatabase();
  }
}
