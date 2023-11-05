import { DataSource } from 'typeorm';
import { Product } from '../models/product.entity';

export const ProductRepository = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
    inject: ['DATA_SOURCE'],
  },
];