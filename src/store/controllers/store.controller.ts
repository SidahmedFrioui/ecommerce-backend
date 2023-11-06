import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { Store } from '../models/store.entity';
import { StoreService } from '../services/store.service';

@Controller('stores')
export class StoreController {
    constructor(private storeService: StoreService) {}

    @Get()
    getAll(): Promise<Store[]> {
        return this.storeService.findAllStores();
    }

    @Get(':id')
    getById(@Param('id') id: any): Promise<Store> {
        return this.storeService.getById(id);
    }

    @Post()
    createStore(@Body() storeData: Store): Promise<Store> {
        return this.storeService.createStore(storeData);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number): Promise<boolean> {
        return this.storeService.deleteStore(id);
    }
}