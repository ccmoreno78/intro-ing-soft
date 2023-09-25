import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsService } from './rooms.service';
import {
  RoomsController,
  RoomsTypesController,
  RoomsValuesController,
} from './rooms.controller';
import { Room, RoomSchema } from './entities/room.entity';
import { RoomType, RoomTypeSchema } from './entities/roomType.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Room.name,
        schema: RoomSchema,
      },
      {
        name: RoomType.name,
        schema: RoomTypeSchema,
      },
    ]),
  ],
  controllers: [RoomsController, RoomsTypesController, RoomsValuesController],
  providers: [RoomsService],
})
export class RoomsModule {}
