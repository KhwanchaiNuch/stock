import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateInventoryDto {
  @IsNotEmpty()
  @IsString()
  receiptItemId: string;

  @IsNotEmpty()
  @IsNumber()
  inventoryCount: number;

  @IsOptional()
  @IsString()
  userId: string;
}
