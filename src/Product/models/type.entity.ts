import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Subcategory } from './subcategory.entity';

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('text')
  name: string;

  @Column()
  pictureUrl: string;

  @ManyToOne(() => Subcategory, subcategory => subcategory.types)
  @JoinColumn({ name: 'parentSubCategoryId' })
  parentSubCategory: Subcategory;
}