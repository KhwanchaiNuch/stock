import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryEntity } from './entities/history.entity';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { ProductModule } from '../product/product.module';

@Module({
  controllers: [HistoryController],
  imports: [
    TypeOrmModule.forFeature([HistoryEntity]),
    forwardRef(() => ProductModule),
  ],
  exports: [TypeOrmModule.forFeature([HistoryEntity]), HistoryService],
  providers: [HistoryService],
})
export class HistoryModule {}
