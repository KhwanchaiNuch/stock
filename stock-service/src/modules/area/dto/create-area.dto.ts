import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AreaStockType } from '../entities/area.entity';

export class CreateAreaDto {
  @IsNotEmpty()
  @IsString()
  areaNo: string;

  @IsNotEmpty()
  @IsString()
  areaName: string;

  @IsOptional()
  @IsString()
  note: string;

  @IsNotEmpty()
  @IsEnum(AreaStockType)
  typeOfStock: AreaStockType;
}
