import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstname: string;

    @Column()
    secondname: string;

    @Column()
    email: string;

    @Column()
    adress: string;

    @Column()
    password: string;

    @Column()
    phoneNumber: string;
}