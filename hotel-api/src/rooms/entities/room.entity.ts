import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  MaxLength,
  IsOptional,
  Validate,
  IsNumber,
  IsUrl,
} from 'class-validator';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { RoomType } from '../entities/roomType.entity';

export type RoomsDocument = Room & Document;

@Schema()
export class Room {
  @Prop({
    type: mongoose.Schema.ObjectId,
    ref: 'RoomType',
    required: true,
  })
  roomTypeId: RoomType;

  @Prop({
    type: 'string',
    required: true,
  })
  @MaxLength(500)
  @Validate((value: string) => /^[\\w\\d\\s#,-./()]*$/.test(value), {
    message: 'La descripción solo debe contener texto',
  })
  description: string;

  @Prop({
    type: 'boolean',
    default: true,
  })
  @IsOptional()
  available?: boolean;

  @Prop({
    type: 'number',
    required: true,
  })
  @IsNumber()
  value: boolean;

  @Prop({
    type: 'number',
    unique: true,
    required: true,
  })
  roomNumber: number;

  @Prop({
    type: 'string',
  })
  @IsUrl()
  imageUrl?: string;

  @Prop({
    type: 'date',
    default: new Date(),
  })
  createAt?: string;

  @Prop({
    type: 'date',
    default: new Date(),
  })
  updateAt?: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
