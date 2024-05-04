import slugify from 'slugify';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const exitingAuthor = await this.authorModel.findOne({
      name: createAuthorDto.name,
    });

    if (exitingAuthor) throw new ConflictException('Tác giả đã tồn tại');

    const slug = slugify(createAuthorDto.name, {
      lower: true,
      locale: 'vi',
    });

    const resultCreate = new this.authorModel({ ...createAuthorDto, slug });

    resultCreate.save();

    if (!resultCreate) throw new BadRequestException('Thêm tác giả thất bại');

    return resultCreate;
  }

  async findAll(): Promise<Author[]> {
    return await this.authorModel.find();
  }

  async findOne(id: string): Promise<Author> {
    return await this.authorModel.findById(id);
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const slug = slugify(updateAuthorDto.name, {
      lower: true,
      locale: 'vi',
    });

    const resultUpdate = await this.authorModel.findByIdAndUpdate(
      id,
      { ...updateAuthorDto, slug },
      { new: true },
    );

    if (!resultUpdate)
      throw new BadRequestException('Cập nhật tác giả thất bại');

    return resultUpdate;
  }

  async remove(id: string): Promise<Author> {
    const resultDelete = await this.authorModel.findByIdAndDelete(id);

    if (!resultDelete) throw new BadRequestException('Xóa tác giả thất bại');

    return resultDelete;
  }
}
