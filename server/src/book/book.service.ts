import slugify from 'slugify';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(
    createBookDto: CreateBookDto,
    user_id: mongoose.Schema.Types.ObjectId,
  ): Promise<Book> {
    const exitingBook = await this.bookModel.findOne({
      name: createBookDto.name,
    });

    if (exitingBook) throw new ConflictException('Sách đã tồn tại');

    const slug = slugify(createBookDto.name, {
      lower: true,
      locale: 'vi',
    });

    const resultCreate = new this.bookModel({
      ...createBookDto,
      slug,
      user_id,
    });

    await resultCreate.save();

    if (!resultCreate) throw new BadRequestException('Thêm sách thất bại');

    return resultCreate;
  }

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find().populate({
      path: 'user_id category_id world_id faction_id author_id',
      select:
        '-password -balance -ballot -refresh_token -roles_list -abilities_list',
    });
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findById(id).populate({
      path: 'user_id category_id world_id faction_id author_id',
      select:
        '-password -balance -ballot -refresh_token -roles_list -abilities_list',
    });
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const slug = slugify(updateBookDto.name, {
      lower: true,
      locale: 'vi',
    });

    const resultUpdate = await this.bookModel.findByIdAndUpdate(
      id,
      { ...updateBookDto, slug },
      { new: true },
    );

    if (!resultUpdate) throw new BadRequestException('Cập nhật sách thất bại');

    return resultUpdate;
  }

  async remove(id: string): Promise<Book> {
    const resultDelete = await this.bookModel.findByIdAndDelete(id);

    if (!resultDelete) throw new BadRequestException('Xóa sách thất bại');

    return resultDelete;
  }
}
