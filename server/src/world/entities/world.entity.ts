import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WorldDocument = HydratedDocument<World>;

@Schema({ timestamps: true, versionKey: false })
export class World {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  slug: string;
}

export const WorldSchema = SchemaFactory.createForClass(World);
