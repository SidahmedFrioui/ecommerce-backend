import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';
import { Subcategory } from './subcategory.entity';
import { Store } from 'src/store/models/store.entity';
import { Type } from './type.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 500 })
  name: string;

  @Column('json', { nullable: true })
  description: string[];

  @Column()
  thumbnailUrl: string;

  @Column()
  firstPictureUrl: string;

  @Column()
  secondPictureUrl: string;

  @Column()
  thirdPictureUrl: string;

  @Column('int')
  price: number;

  @Column('json', { nullable: true })
  colors: string[];

  @ManyToOne(() => Store, { eager: true })
  @JoinColumn({ name: 'store_id' })
  store: Store;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => Subcategory, { eager: true })
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: Subcategory;

  @ManyToOne(() => Type, { eager: true })
  @JoinColumn({ name: 'type_id' })
  type: Type;
}
