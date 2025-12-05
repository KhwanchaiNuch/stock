// src/modules/transaction/dto/list-transaction.dto.ts
import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';
import { TransactionStatus } from '../entities/transaction.entity';

export class ListTransactionDto {
  @IsNumberString()
  @IsOptional()
  limit?: number;

  @IsNumberString()
  @IsOptional()
  offset?: number;

  @IsString()
  @IsOptional()
  receipt?: string;

  @IsEnum(TransactionStatus)
  @IsOptional()
  status?: TransactionStatus;

  @IsString()
  @IsOptional()
  itemId?: string;

  @IsString()
  @IsOptional()
  lotNo?: string;

  // ⭐ เพิ่ม type สำหรับ RM/WIP/FG/BS
  @IsString()
  @IsOptional()
  type?: string;

  // ⭐ เพิ่มฟิลเตอร์ partNo
  @IsString()
  @IsOptional()
  partNo?: string;

  // ⭐ เพิ่มฟิลเตอร์ชื่อ partName
  @IsString()
  @IsOptional()
  inputPartName?: string;

  // ⭐ date filter (YYYY-MM-DD)
  @IsString()
  @IsOptional()
  date?: string;


}
