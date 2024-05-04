import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Action, Subjects } from '../casl-ability.factory';

export type AbilityDocument = HydratedDocument<Ability>;

@Schema({ timestamps: true, versionKey: false })
export class Ability {
  @Prop({ require: true, enum: Action })
  action: string;

  @Prop({ require: true, enum: Subjects })
  subject: string;

  @Prop({ type: Boolean, require: true, default: false })
  default: boolean;
}

export const AbilitySchema = SchemaFactory.createForClass(Ability);
