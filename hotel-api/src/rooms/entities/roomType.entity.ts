import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MaxLength, IsOptional, Validate, IsEnum } from 'class-validator';
import { Document } from 'mongoose';
import { RoomsDefaultTypes } from '../../constants';

export type RoomsTypes = RoomType & Document;

@Schema()
export class RoomType {
  @Prop({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: RoomsDefaultTypes,
    },
  })
  @IsEnum(RoomsDefaultTypes)
  roomType: typeof RoomsDefaultTypes;

  @Prop({
    type: 'string',
    required: true,
  })
  @IsOptional()
  @MaxLength(500)
  @Validate((value: string) => /^[\\w\\d\\s#,-./()]*$/.test(value), {
    message: 'La descripción solo debe contener texto',
  })
  description?: string;

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

export const RoomTypeSchema = SchemaFactory.createForClass(RoomType);
