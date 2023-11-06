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

  async getById(id: any): Promise<Store> {
    return await this.storeRepository.findOne({ where: { id } })
  }

  async createStore(storeData: Store): Promise<Store> {
    return await this.storeRepository.save(storeData);
  }

  async deleteStore(id: number): Promise<boolean> {
    const deleteResult = await this.storeRepository.delete(id);
    return deleteResult.affected > 0;
  }
}