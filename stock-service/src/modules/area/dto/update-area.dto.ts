import { PartialType } from '@nestjs/mapped-types';
import { CreateAreaDto } from './create-area.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAreaDto extends PartialType(CreateAreaDto) {
  @IsNotEmpty()
  @IsString()
  id: string;
}
