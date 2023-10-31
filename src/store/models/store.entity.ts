import { Product } from 'src/Product/models/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Store {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 500 })
    name: string;

    @Column()
    description: string;

    @Column()
    thumbnailUrl: string;

    @OneToMany(() => Product, product => product.store)
    products: Product[];
}