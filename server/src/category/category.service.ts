import slugify from 'slugify';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const exitingCategory = await this.categoryModel
      .findOne({
        name: createCategoryDto.name,
      })
      .exec();

    if (exitingCategory) throw new ConflictException('Danh mục đã tồn tại');

    const slug = slugify(createCategoryDto.name, {
      lower: true,
      locale: 'vi',
    });

    const resultCreate = new this.categoryModel({
      ...createCategoryDto,
      slug,
    });

    await resultCreate.save();

    if (!resultCreate) throw new BadRequestException('Thêm danh mục thất bại');

    return resultCreate;
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find();
  }

  async findOne(id: string): Promise<Category> {
    return await this.categoryModel.findById(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const slug = slugify(updateCategoryDto.name, {
      lower: true,
      locale: 'vi',
    });

    const resultUpdate = await this.categoryModel.findByIdAndUpdate(
      id,
      { ...updateCategoryDto, slug },
      { new: true },
    );

    if (!resultUpdate)
      throw new BadRequestException('Cập nhật danh mục thất bại');

    return resultUpdate;
  }

  async remove(id: string): Promise<Category> {
    const resultDelete = await this.categoryModel.findByIdAndDelete(id);

    if (!resultDelete) throw new BadRequestException('Xóa danh mục thất bại');

    return resultDelete;
  }
}
