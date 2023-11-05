import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StoreController } from './controllers/store.controller';
import { StoreRepository } from './repositories/store.repository';
import { StoreService } from './services/store.service';

@Module({
  imports: [DatabaseModule],
  controllers: [
    StoreController
  ],
  providers: [
    ...StoreRepository,
    StoreService
  ],
})
export class StoreModule {}