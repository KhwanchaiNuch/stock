import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryEntity } from './entities/inventory.entity';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { UsersModule } from '../users/users.module';
import { RawMaterialModule } from '../raw-material/raw-material.module';
import { TransactionModule } from '../transaction/transaction.module';
import { HistoryModule } from '../history/history.modele';
import { ProductModule } from '../product/product.module';

@Module({
  controllers: [InventoryController],
  imports: [
    TypeOrmModule.forFeature([InventoryEntity]),
    forwardRef(() => RawMaterialModule),
    forwardRef(() => ProductModule),
    UsersModule,
    TransactionModule,
    HistoryModule,
  ],
  exports: [TypeOrmModule.forFeature([InventoryEntity])],
  providers: [InventoryService],
})
export class InventoryModule {}
