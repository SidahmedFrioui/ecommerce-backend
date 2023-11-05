import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Subcategory } from './subcategory.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('text')
  name: string;

  @Column()
  pictureUrl: string;

  @OneToMany(() => Subcategory, subcategory => subcategory.parentCategory)
  subcategories: Subcategory[];
}
