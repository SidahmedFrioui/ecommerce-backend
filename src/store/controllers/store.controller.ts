import { Body, Controller, Get, Post } from '@nestjs/common';
import { Store } from '../models/store.entity';
import { StoreService } from '../services/store.service';

@Controller('stores')
export class StoreController {
    constructor(private storeService: StoreService) {}

    @Get()
    getAll(): Promise<Store[]> {
        return this.storeService.findAllStores();
    }

    @Post()
    createStore(@Body() storeData: Store): Promise<Store> {
        return this.storeService.createStore(storeData);
    }
}