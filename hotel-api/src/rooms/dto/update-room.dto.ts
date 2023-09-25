import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  Matches,
  IsNumber,
  IsUrl,
  IsOptional,
} from 'class-validator';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
  @IsOptional()
  @IsString()
  @Matches('^[\\w\\d\\s#,-./()]')
  description?: string;

  @IsNumber()
  @IsOptional()
  value?: number;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;

  @IsOptional()
  available?: boolean;
}
