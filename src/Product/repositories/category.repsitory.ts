import { DataSource } from 'typeorm';
import { Category } from '../models/category.entity';

export const CategoryRepository = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
    inject: ['DATA_SOURCE'],
  },
];