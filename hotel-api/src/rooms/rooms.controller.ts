import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @Get()
  findAll(@Query() params: any) {
    if (params.roomTypeId) {
      return this.roomsService.findByRoomType(params.roomTypeId);
    }
    return this.roomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(id, updateRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsService.remove(id);
  }
}

@Controller('rooms-types')
export class RoomsTypesController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  create(@Body() createRoomTypeDto: CreateRoomTypeDto) {
    try {
      return this.roomsService.createRoomType(createRoomTypeDto);
    } catch (error) {
      console.log(
        '🚀 ~ file: rooms.controller.ts:59 ~ RoomsTypesController ~ create ~ error:',
        error,
      );
    }
  }

  @Get()
  findAll() {
    return this.roomsService.findAllRoomTypes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOneRoomTypes(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(id, updateRoomDto);
  }
}

@Controller('rooms-values')
export class RoomsValuesController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  findAll() {
    return this.roomsService.getRoomTypesValues();
  }
}
