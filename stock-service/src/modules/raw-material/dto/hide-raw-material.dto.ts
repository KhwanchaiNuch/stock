import { IsNotEmpty, IsString } from 'class-validator';

export class HideRawMaterialDto {
  @IsNotEmpty()
  @IsString()
  receiptNo: string;
}
