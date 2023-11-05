import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from './category.entity';
import { Type } from './type.entity';

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('text')
  name: string;

  @Column()
  pictureUrl: string;

  @OneToMany(() => Type, type => type.parentSubCategory)
  types: Type[];

  @ManyToOne(() => Category, category => category.subcategories)
  @JoinColumn({ name: 'parentCategoryId' })
  parentCategory: Category;
}