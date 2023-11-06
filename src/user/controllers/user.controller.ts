import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../models/user.entity";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    createStore(@Body() userData: any): Promise<User> {
        return this.userService.create(userData);
    }
}