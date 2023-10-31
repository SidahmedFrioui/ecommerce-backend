import { DataSource } from 'typeorm';
import { Subcategory } from '../models/subcategory.entity';


export const SubCategoryRepository = [
  {
    provide: 'SUBCATEGORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Subcategory),
    inject: ['DATA_SOURCE'],
  },
];