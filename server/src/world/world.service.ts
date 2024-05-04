import slugify from 'slugify';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { CreateWorldDto } from './dto/create-world.dto';
import { UpdateWorldDto } from './dto/update-world.dto';
import { World } from './entities/world.entity';

@Injectable()
export class WorldService {
  constructor(@InjectModel(World.name) private worldModel: Model<World>) {}
  async create(createWorldDto: CreateWorldDto): Promise<World> {
    const exitingWorld = await this.worldModel.findOne({
      name: createWorldDto.name,
    });

    if (exitingWorld)
      throw new ConflictException('Bối cảnh thế giới đã tồn tại');

    const slug = slugify(createWorldDto.name, {
      lower: true,
      locale: 'vi',
    });

    const resultCreate = new this.worldModel({
      ...createWorldDto,
      slug,
    });

    await resultCreate.save();

    if (!resultCreate)
      throw new BadRequestException('Thêm bối cảnh thế giới thất bại');

    return resultCreate;
  }

  async findAll(): Promise<World[]> {
    return await this.worldModel.find();
  }

  async findOne(id: string): Promise<World> {
    return await this.worldModel.findById(id);
  }

  async update(id: string, updateWorldDto: UpdateWorldDto): Promise<World> {
    const slug = slugify(updateWorldDto.name, {
      lower: true,
      locale: 'vi',
    });

    const resultUpdate = await this.worldModel.findByIdAndUpdate(
      id,
      { ...updateWorldDto, slug },
      { new: true },
    );

    if (!resultUpdate)
      throw new BadRequestException('Cập nhật bối cảnh thế giới thất bại');

    return resultUpdate;
  }

  async remove(id: string): Promise<World> {
    const resultDelete = await this.worldModel.findByIdAndDelete(id);

    if (!resultDelete)
      throw new BadRequestException('Xóa bối cảnh thế giới thất bại');

    return resultDelete;
  }
}
