import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('text')
  name: string;

  @Column()
  pictureUrl: string;

  @ManyToOne(() => Category, category => category.subcategories)
  @JoinColumn({ name: 'parentCategoryId' })
  parentCategory: Category;
}