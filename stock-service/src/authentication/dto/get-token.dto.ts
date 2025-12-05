import { IsNotEmpty, IsString } from 'class-validator';

export class GetTokenDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  username: string;
}
