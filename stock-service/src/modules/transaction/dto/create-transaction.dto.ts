// src/modules/transaction/dto/create-transaction.dto.ts
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { TransactionStatus } from '../entities/transaction.entity';
import { AreaStockType } from 'src/modules/area/entities/area.entity';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  receipt: string;

  @IsEnum(TransactionStatus)
  @IsOptional()
  status?: TransactionStatus; // ไม่ส่งมาก็ default เป็น INBOUND ตาม Entity

  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  lotNo: string;

  @IsNotEmpty()
  @IsString()
  itemId: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  // relation
  @IsNotEmpty()
  @IsString()
  areaId: string;

  @IsEnum(AreaStockType)
  type: AreaStockType;

  @IsString()
  @IsOptional()
  checkStatus?: string;
}
