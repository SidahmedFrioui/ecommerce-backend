import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from '../models/product.entity';
import { Category } from '../models/category.entity';
import { Subcategory } from '../models/subcategory.entity';
import { Type } from '../models/type.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
    @Inject('SUBCATEGORY_REPOSITORY')
    private subCategoryRepository: Repository<Subcategory>,
    @Inject('TYPE_REPOSITORY')
    private typeRepository: Repository<Type>
  ) {}
  // Product
  async findAllProducts(): Promise<Product[]> {
    return await this.productRepository.find({ relations: ['category', 'subcategory', 'type'] });
  }

  async getProductById(id: any): Promise<Product> {
    return await this.productRepository.findOne({ where: { id } });
  }

  async createProduct(productData: Product): Promise<Product> {
    return await this.productRepository.save(productData);
  }

  async deleteProduct(id: number): Promise<boolean> {
    const deleteResult = await this.productRepository.delete(id);
    return deleteResult.affected > 0;
  }

  async updateProduct(id: string, updatedProductData: Partial<Product>): Promise<Product> {
    await this.productRepository.update({id}, updatedProductData);
    return this.productRepository.findOne({ where: { id } });
  }
  // Category
  async findAllCategories(): Promise<Category[]> {
    return await this.categoryRepository.find({ relations: ['subcategories', 'subcategories.types'] });
  }

  async createCategory(categoryData: Category): Promise<Category> {
    return await this.categoryRepository.save(categoryData);
  }

  async deleteCategory(id: number): Promise<boolean> {
    const deleteResult = await this.categoryRepository.delete(id);
    return deleteResult.affected > 0;
  }

  async updateCategory(id: string, updatedCategoryData: Partial<Category>): Promise<Category> {
    await this.categoryRepository.update({id}, updatedCategoryData);
    return this.categoryRepository.findOne({ where: { id } });
  }

  // Subcategory
  async findAllScategories(): Promise<Subcategory[]> {
    return await this.subCategoryRepository.find({ relations: ['types'] });
  }

  async createSubCategory(subCategoryData: Subcategory): Promise<Subcategory> {
    return await this.subCategoryRepository.save(subCategoryData);
  }

  async deleteSubCategory(id: number): Promise<boolean> {
    const deleteResult = await this.subCategoryRepository.delete(id);
    return deleteResult.affected > 0;
  }

  async updateSubCategory(id: string, updatedSubCategoryData: Partial<Subcategory>): Promise<Subcategory> {
    await this.subCategoryRepository.update({id}, updatedSubCategoryData);
    return this.subCategoryRepository.findOne({ where: { id } });
  }

  // Type
  async findAllTypes(): Promise<Type[]> {
    return await this.typeRepository.find();
  }

  async createType(typeData: Type): Promise<Type> {
    return await this.typeRepository.save(typeData);
  }

  async deleteType(id: number): Promise<boolean> {
    const deleteResult = await this.typeRepository.delete(id);
    return deleteResult.affected > 0;
  }

  async updateType(id: string, updatedTypeData: Partial<Type>): Promise<Type> {
    await this.typeRepository.update({id}, updatedTypeData);
    return this.typeRepository.findOne({ where: { id } });
  }
}