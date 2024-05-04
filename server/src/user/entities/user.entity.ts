import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Role } from '../../role/entities/role.entity';
import { Ability } from '../../ability/entities/ability.entity';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, versionKey: false })
export class User {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  image: string;

  @Prop({ type: String })
  phone: string;

  @Prop({ type: Number })
  sex: number;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Number, default: 0 })
  balance: number;

  @Prop({ type: Number, default: 3 })
  ballot: number;

  @Prop({ type: String, default: 'refresh_token_string' })
  refresh_token: string;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Role',
  })
  roles_list: Role[];

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Ability',
  })
  abilities_list: Ability[];
}

export const UserSchema = SchemaFactory.createForClass(User);
