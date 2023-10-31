import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProductRepository } from './repositories/product.repository';
import { ProductService } from './services/product.service';
import { CategoryController, ProductController, SubCategoryController } from './controllers/product.controller';
import { CategoryRepository } from './repositories/category.repsitory';
import { SubCategoryRepository } from './repositories/subcategory.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [
    ProductController,
    CategoryController,
    SubCategoryController
  ],
  providers: [
    ...ProductRepository,
    ...CategoryRepository,
    ...SubCategoryRepository,
    ProductService,
  ],
})
export class ProductModule {}