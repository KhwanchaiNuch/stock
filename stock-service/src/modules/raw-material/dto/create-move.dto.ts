import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AreaStockType } from 'src/modules/area/entities/area.entity';

export class CreateMoveDto {
  // @IsNotEmpty()
  // @IsString()
  // receiptNo: string;

  @IsNotEmpty()
  @IsString()
  partNo: string;

  @IsNotEmpty()
  @IsString()
  lotNo: string;

  // @IsNotEmpty()
  // @IsNumber()
  // quantity: number;

  @IsNotEmpty()
  @IsString()
  area: string;

  @IsOptional()
  @IsString()
  userId: string;
  
  @IsNotEmpty()
  @IsString()
  stockType: AreaStockType;
}

// export class GetInboundDto {
  
//   @IsNotEmpty()
//   @IsString()
//   partNo: string;

//   @IsNotEmpty()
//   @IsString()
//   lotNo: string;

//   @IsNotEmpty()
//   @IsString()
//   stockType: AreaStockType;
// }
