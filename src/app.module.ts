import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/product.module';
import { DatabaseModule } from './database/database.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    DatabaseModule,
    ProductModule,
    StoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
