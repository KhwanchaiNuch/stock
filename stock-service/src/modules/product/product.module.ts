import { Module, forwardRef } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { RawMaterialModule } from 'src/modules/raw-material/raw-material.module';
import { AreaModule } from 'src/modules/area/area.module';
import { TransactionModule } from 'src/modules/transaction/transaction.module';
import { UtilService } from '../utils/utility.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    forwardRef(() => RawMaterialModule),
    AreaModule,
    TransactionModule,
  ],
  controllers: [ProductController],
  providers: [ProductService, UtilService],
  exports: [ProductService, TypeOrmModule.forFeature([ProductEntity])],
})
export class ProductModule {}
