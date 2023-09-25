import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { Room } from './entities/room.entity';
import { RoomType } from './entities/roomType.entity';
import { RoomsDefaultTypes } from 'src/constants';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room.name) private readonly roomModel: Model<Room>,
    @InjectModel(RoomType.name) private readonly roomTypeModel: Model<RoomType>,
  ) {}
  async create(createRoomDto: CreateRoomDto) {
    try {
      return await this.roomModel.create({ ...createRoomDto });
    } catch (error) {
      console.log(
        '🚀 ~ file: rooms.service.ts:25 ~ RoomsService ~ create ~ error:',
        error,
      );
    }
  }

  async findAll() {
    try {
      const res = await this.roomModel.find();
      return res;
    } catch (error) {
      console.log(
        '🚀 ~ file: rooms.service.ts:33 ~ RoomsService ~ findAll ~ error:',
        error,
      );
    }
  }

  findOne(id: string) {
    try {
      return this.roomModel.findById(id);
    } catch (error) {
      console.log(
        '🚀 ~ file: rooms.service.ts:44 ~ RoomsService ~ findOne ~ error:',
        error,
      );
    }
  }

  findByRoomType(id: string) {
    try {
      return this.roomModel.find({ roomTypeId: id });
    } catch (error) {
      console.log(
        '🚀 ~ file: rooms.service.ts:44 ~ RoomsService ~ findOne ~ error:',
        error,
      );
    }
    return `This action returns a #${id} room`;
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    const data = {
      ...updateRoomDto,
      updateAt: Date.now(),
    };
    return this.roomModel.findByIdAndUpdate(id, data);
  }

  remove(id: string) {
    return `This action removes a #${id} room`;
  }

  getRoomTypesValues() {
    return RoomsDefaultTypes;
  }

  async createRoomType(createRoomTypeDto: CreateRoomTypeDto) {
    try {
      return await this.roomTypeModel.create({ ...createRoomTypeDto });
    } catch (error) {
      console.log(
        '🚀 ~ file: rooms.service.ts:60 ~ RoomsService ~ createRoomType ~ error:',
        error,
      );
    }
  }

  async findAllRoomTypes() {
    try {
      return await this.roomTypeModel.find();
    } catch (error) {
      console.log(
        '🚀 ~ file: rooms.service.ts:71 ~ RoomsService ~ findAllRoomTypes ~ error:',
        error,
      );
    }
  }

  async findOneRoomTypes(id: string) {
    try {
      return await this.roomTypeModel.findById(id);
    } catch (error) {
      console.log(
        '🚀 ~ file: rooms.service.ts:71 ~ RoomsService ~ findAllRoomTypes ~ error:',
        error,
      );
    }
  }
}
