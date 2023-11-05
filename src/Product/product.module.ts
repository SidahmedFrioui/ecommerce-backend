import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProductRepository } from './repositories/product.repository';
import { ProductService } from './services/product.service';
import { CategoryController, ProductController, SubCategoryController, TypeController } from './controllers/product.controller';
import { CategoryRepository } from './repositories/category.repsitory';
import { SubCategoryRepository } from './repositories/subcategory.repository';
import { TypeRepository } from './repositories/type.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [
    ProductController,
    CategoryController,
    SubCategoryController,
    TypeController
  ],
  providers: [
    ...ProductRepository,
    ...CategoryRepository,
    ...SubCategoryRepository,
    ...TypeRepository,
    ProductService,
  ],
})
export class ProductModule {}