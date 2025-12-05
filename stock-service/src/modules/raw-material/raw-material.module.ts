import { Module, forwardRef } from '@nestjs/common';
import { RawMaterialService } from './raw-material.service';
import { RawMaterialController } from './raw-material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RawMaterialEntity } from './entities/raw-material.entity';
import { ProductModule } from 'src/modules/product/product.module';
import { UsersModule } from 'src/modules/users/users.module';
import { AreaModule } from 'src/modules/area/area.module';
import { RawMaterialItemEntity } from './entities/raw-material-item.entity';
import { CustomerModule } from 'src/modules/customer/customer.module';
import { TransactionModule } from 'src/modules/transaction/transaction.module';
import { SuppliersModule } from '../suppliers/suppliers.module';
import { HistoryModule } from '../history/history.modele';
import { UtilService } from '../utils/utility.service';
import { InventoryModule } from '../inventory/inventory.module';

@Module({
  controllers: [RawMaterialController],
  providers: [RawMaterialService, UtilService],
  imports: [
    TypeOrmModule.forFeature([RawMaterialEntity, RawMaterialItemEntity]),
    // ProductModule,
    forwardRef(() => ProductModule),
    UsersModule,
    AreaModule,
    SuppliersModule,
    CustomerModule,
    TransactionModule,
    InventoryModule,
    HistoryModule,
  ],
  exports: [
    RawMaterialService,
    TypeOrmModule.forFeature([RawMaterialEntity, RawMaterialItemEntity]),
  ],
})
export class RawMaterialModule {}
