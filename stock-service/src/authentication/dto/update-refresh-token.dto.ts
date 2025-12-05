import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRefreshTokenDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}
