import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsNotEmpty()
  @IsString()
  supplierNo: string;

  @IsNotEmpty()
  @IsString()
  supplierName: string;

  @IsOptional()
  @IsString()
  note: string;
}
