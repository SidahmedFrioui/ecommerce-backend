import { DataSource } from 'typeorm';
import { Store } from '../models/store.entity';

export const StoreRepository = [
  {
    provide: 'STORE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Store),
    inject: ['DATA_SOURCE'],
  },
];