import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AuthorDocument = HydratedDocument<Author>;

@Schema({ timestamps: true, versionKey: false })
export class Author {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  slug: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
