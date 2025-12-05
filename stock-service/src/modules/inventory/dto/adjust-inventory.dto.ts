import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AdjustInventoryDto {
    @IsNotEmpty()
    @IsString()
    inventoryId: string;

    @IsOptional()
    @IsString()
    userId: string;
}
