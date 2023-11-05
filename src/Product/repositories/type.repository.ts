import { DataSource } from 'typeorm';
import { Type } from '../models/type.entity';


export const TypeRepository = [
  {
    provide: 'TYPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Type),
    inject: ['DATA_SOURCE'],
  },
];