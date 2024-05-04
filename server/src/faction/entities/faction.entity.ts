import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FactionDocument = HydratedDocument<Faction>;

@Schema({ timestamps: true, versionKey: false })
export class Faction {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  slug: string;
}

export const FactionSchema = SchemaFactory.createForClass(Faction);
