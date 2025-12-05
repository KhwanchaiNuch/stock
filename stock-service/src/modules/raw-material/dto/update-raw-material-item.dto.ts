import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRawMaterialItemDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  note: string;

  @IsOptional()
  @IsNumber()
  qty: number;
}
