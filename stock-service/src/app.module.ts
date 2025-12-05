import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './database/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { ProductModule } from './modules/product/product.module';
import { AreaModule } from './modules/area/area.module';
import { CustomerModule } from './modules/customer/customer.module';
import { RawMaterialModule } from './modules/raw-material/raw-material.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { UtilService } from './modules/utils/utility.service';
import { HistoryModule } from './modules/history/history.modele';
import { InventoryModule } from './modules/inventory/inventory.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    AuthenticationModule,
    SuppliersModule,
    ProductModule,
    AreaModule,
    CustomerModule,
    RawMaterialModule,
    TransactionModule,
    HistoryModule,
    InventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, UtilService],
})
export class AppModule {}
