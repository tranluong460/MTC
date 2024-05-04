import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema({ timestamps: true, versionKey: false })
export class Role {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Boolean, required: true, default: false })
  default: boolean;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
