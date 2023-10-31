import { Body, Controller, Get, Post, Delete, Param, Put } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.entity';
import { Category } from '../models/category.entity';
import { Subcategory } from '../models/subcategory.entity';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    getAll(): Promise<Product[]> {
        return this.productService.findAllProducts();
    }

    @Post()
    createProduct(@Body() productData: Product): Promise<Product> {
        return this.productService.createProduct(productData);
    }

    @Put(':id')
    async updateProduct(
        @Param('id') id: any,
        @Body() updatedProductData: Partial<Product>,
    ): Promise<Product> {
        return this.productService.updateProduct(id, updatedProductData);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number): Promise<boolean> {
        return this.productService.deleteProduct(id);
    }
}

@Controller('categories')
export class CategoryController {
    constructor(private productService: ProductService) {}

    @Get()
    getAll(): Promise<Category[]> {
        return this.productService.findAllCategories();
    }

    @Post()
    createProduct(@Body() categoryData: Category): Promise<Category> {
        return this.productService.createCategory(categoryData);
    }

    @Put(':id')
    async updateCategory(
        @Param('id') id: any,
        @Body() updatedCategoryData: Partial<Category>,
    ): Promise<Category> {
        return this.productService.updateCategory(id, updatedCategoryData);
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: number): Promise<boolean> {
        return this.productService.deleteCategory(id);
    }
}

@Controller('subcategories')
export class SubCategoryController {
    constructor(private productService: ProductService) {}
    
    @Get()
    getAll(): Promise<Subcategory[]> {
        return this.productService.findAllScategories();
    }

    @Post()
    createProduct(@Body() subCategoryData: Subcategory): Promise<Subcategory> {
        return this.productService.createSubCategory(subCategoryData);
    }

    @Put(':id')
    async updateSubcategory(
        @Param('id') id: any,
        @Body() updatedSubcategoryData: Partial<Subcategory>,
    ): Promise<Subcategory> {
        return this.productService.updateSubCategory(id, updatedSubcategoryData);
    }

    @Delete(':id')
    async deleteSubcategory(@Param('id') id: number): Promise<boolean> {
        return this.productService.deleteSubCategory(id);
    }
}
