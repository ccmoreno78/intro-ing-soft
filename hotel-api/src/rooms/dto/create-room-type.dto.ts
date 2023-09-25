import { IsEnum, IsNotEmpty, Matches } from 'class-validator';
import { RoomsDefaultTypes } from 'src/constants';

export class CreateRoomTypeDto {
  @IsEnum(RoomsDefaultTypes)
  roomType: typeof RoomsDefaultTypes;

  @IsNotEmpty()
  @Matches('^[\\w\\d\\s#,-./()]')
  description: string;
}
