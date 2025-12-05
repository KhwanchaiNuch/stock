import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { AreaStockType } from 'src/modules/area/entities/area.entity';

export class CreateOutboundDto {
  @IsNotEmpty()
  @IsString()
  receiptNo: string;

  @IsNotEmpty()
  @IsString()
  partNo: string;

  @IsNotEmpty()
  @IsString()
  lotNo: string;

  @IsNotEmpty()
  @IsString()
  area: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  stockType: AreaStockType;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  userId: string;
}

export class GetOutboundDto {
  @IsNotEmpty()
  @IsString()
  receiptNo: string;

  @IsNotEmpty()
  @IsString()
  partNo: string;

  @IsNotEmpty()
  @IsString()
  lotNo: string;
}

export class CreateOutboundFinalsDto {

  @IsOptional()
  @IsString()
  partNo: string;

  @IsOptional()
  @IsString()
  lotNo: string;

  @IsOptional()
  @IsString()
  area: string;

  @IsOptional()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  stockType: AreaStockType;


  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsNumber()
  quantityOk: number;

  @IsOptional()
  @IsNumber()
  move: number;

  @IsOptional()
  @IsString()
  location: string;


}