import { Inject, Injectable } from "@nestjs/common";
import { User } from "../models/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>
    ) {}

    async create(user: any): Promise<User> {
        const hashedPassword = await bcrypt.hash(user.password, 10);
    
        user.password = hashedPassword;
    
        return this.userRepository.save(user);
    }
    
    async findOne(email: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { email } });
    }
}