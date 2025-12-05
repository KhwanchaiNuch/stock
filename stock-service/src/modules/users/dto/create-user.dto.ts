import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ENUM_ROLE } from '../entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  operatorNo: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEnum(ENUM_ROLE)
  role: ENUM_ROLE;

  @IsOptional()
  @IsString()
  note: string;
}
