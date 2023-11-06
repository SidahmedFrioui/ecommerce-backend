import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UserService } from "./services/user.service";
import { UserRepository } from "./repositories/user.repository";
import { UserController } from "./controllers/user.controller";

@Module({
    imports: [DatabaseModule],
    providers: [
        UserService,
        ...UserRepository
    ],
    controllers: [
        UserController
    ]
})
export class UserModule {}