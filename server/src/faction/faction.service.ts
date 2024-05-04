import slugify from 'slugify';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { CreateFactionDto } from './dto/create-faction.dto';
import { UpdateFactionDto } from './dto/update-faction.dto';
import { Faction } from './entities/faction.entity';

@Injectable()
export class FactionService {
  constructor(
    @InjectModel(Faction.name) private factionModel: Model<Faction>,
  ) {}

  async create(createFactionDto: CreateFactionDto): Promise<Faction> {
    const exitingFaction = await this.factionModel.findOne({
      name: createFactionDto.name,
    });

    if (exitingFaction) throw new ConflictException('Lưu phái đã tồn tại');

    const slug = slugify(createFactionDto.name, {
      lower: true,
      locale: 'vi',
    });

    const resultCreate = new this.factionModel({
      ...createFactionDto,
      slug,
    });

    await resultCreate.save();

    if (!resultCreate) throw new BadRequestException('Thêm lưu phái thất bại');

    return resultCreate;
  }

  async findAll(): Promise<Faction[]> {
    return await this.factionModel.find();
  }

  async findOne(id: string): Promise<Faction> {
    return await this.factionModel.findById(id);
  }

  async update(
    id: string,
    updateFactionDto: UpdateFactionDto,
  ): Promise<Faction> {
    const slug = slugify(updateFactionDto.name, {
      lower: true,
      locale: 'vi',
    });

    const resultUpdate = await this.factionModel.findByIdAndUpdate(
      id,
      { ...updateFactionDto, slug },
      { new: true },
    );

    if (!resultUpdate)
      throw new BadRequestException('Cập nhật lưu phái thất bại');

    return resultUpdate;
  }

  async remove(id: string): Promise<Faction> {
    const resultDelete = await this.factionModel.findByIdAndDelete(id);

    if (!resultDelete) throw new BadRequestException('Xóa lưu phái thất bại');

    return resultDelete;
  }
}
