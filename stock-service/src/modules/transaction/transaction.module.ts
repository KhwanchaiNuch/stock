// src/modules/transaction/transaction.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransactionEntity } from './entities/transaction.entity';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { RawMaterialModule } from 'src/modules/raw-material/raw-material.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionEntity]),
    forwardRef(() => RawMaterialModule),   // เพื่อ inject RawMaterialService
  ],
  providers: [TransactionService],
  controllers: [TransactionController],
  exports: [TypeOrmModule.forFeature([TransactionEntity]), TransactionService],
})
export class TransactionModule {}
