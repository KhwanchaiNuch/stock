import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { AreaStockType } from 'src/modules/area/entities/area.entity';

export class CreateRawMaterialDto {
  @IsNotEmpty()
  @IsString()
  receiptNo: string;

  @IsNotEmpty()
  @IsString()
  partNo: string;

  @IsOptional()
  @IsString()
  supplier: string;

  @IsNotEmpty()
  @IsString()
  stockType: AreaStockType;

  @IsOptional()
  @IsString()
  invoiceNo: string;

  @IsOptional()
  @IsString()
  lotNo: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsOptional()
  @IsString()
  receivedBy: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  customer: string;
}

export class CreateRMReceiptDto {
  @IsNotEmpty()
  @IsArray()
  data: CreateRawMaterialDto[];
}
