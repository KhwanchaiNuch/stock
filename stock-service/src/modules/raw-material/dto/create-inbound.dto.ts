import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { AreaStockType } from 'src/modules/area/entities/area.entity';

export class CreateInboundDto {
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
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  area: string;

  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  stockType: AreaStockType;

    @IsOptional()
  @IsString()
  checkStatus: string;
}

export class GetInboundDto {
  @IsNotEmpty()
  @IsString()
  partNo: string;

  @IsNotEmpty()
  @IsString()
  lotNo: string;

  @IsNotEmpty()
  @IsString()
  stockType: AreaStockType;
}

export class GetInboundV2Dto {
  @IsNotEmpty()
  @IsString()
  partNo: string;

  @IsNotEmpty()
  @IsString()
  lotNo: string;

}


export class UpdateInboundDto {
  @IsOptional()
  @IsString()
  receiptNo: string;

  @IsOptional()
  @IsString()
  partNo: string;

  @IsOptional()
  @IsString()
  lotNo: string;

  @IsOptional()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  area: string;

  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  stockType: AreaStockType;

  @IsOptional()
  @IsString()
  checkStatus: string;
}
