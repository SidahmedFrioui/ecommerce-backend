import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Store } from '../models/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @Inject('STORE_REPOSITORY')
    private storeRepository: Repository<Store>,
  ) {}
  // Store
  async findAllStores(): Promise<Store[]> {
    return await this.storeRepository.find({ relations: ['products'] });
  }

  async createStore(storeData: Store): Promise<Store> {
    return await this.storeRepository.save(storeData);
  }
}