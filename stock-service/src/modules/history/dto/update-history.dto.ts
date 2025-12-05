import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateHistoryDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  note: string;
}
