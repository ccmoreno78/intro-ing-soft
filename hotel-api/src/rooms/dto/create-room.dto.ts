import {
  IsNotEmpty,
  IsString,
  Matches,
  IsNumber,
  IsUrl,
  IsOptional,
} from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  @Matches('^[\\w\\d\\s#,-./()]')
  description: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  roomNumber: number;

  @IsNotEmpty()
  @IsString()
  roomTypeId: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}
