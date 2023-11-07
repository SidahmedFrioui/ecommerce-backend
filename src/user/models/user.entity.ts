import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import UserRole from "./roles.enum";

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

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.CUSTOMER,
    })
    role: UserRole;
}