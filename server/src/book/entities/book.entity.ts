import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { User } from '../../user/entities/user.entity';
import { Category } from '../../category/entities/category.entity';
import { World } from '../../world/entities/world.entity';
import { Faction } from '../../faction/entities/faction.entity';
import { Author } from '../../author/entities/author.entity';

export type BookDocument = HydratedDocument<Book>;

@Schema({ timestamps: true, versionKey: false })
export class Book {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  slug: string;

  @Prop({ type: String, required: true })
  synopsis: string;

  @Prop({ type: String, required: true })
  poster: string;

  @Prop({ type: Date })
  new_chap_at: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  })
  user_id: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  })
  category_id: Category;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'World',
  })
  world_id: World;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Faction',
  })
  faction_id: Faction;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Author',
  })
  author_id: Author;
}

export const BookSchema = SchemaFactory.createForClass(Book);
