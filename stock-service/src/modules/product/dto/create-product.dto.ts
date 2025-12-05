import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AreaStockType } from 'src/modules/area/entities/area.entity';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  partNo: string;

  @IsNotEmpty()
  @IsString()
  partName: string;

  @IsNotEmpty()
  @IsString()
  minimumStock: string;

  @IsNotEmpty()
  @IsEnum(AreaStockType)
  type: AreaStockType;

  @IsOptional()
  @IsString()
  size: string;

  @IsOptional()
  @IsString()
  spec: string;

  @IsOptional()
  @IsString()
  note: string;
}
