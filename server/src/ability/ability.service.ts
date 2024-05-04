import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

import { Ability } from './entities/ability.entity';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { UpdateAbilityDto } from './dto/update-ability.dto';

@Injectable()
export class AbilityService {
  constructor(
    @InjectModel(Ability.name) private abilityModel: Model<Ability>,
  ) {}

  async create(createAbilityDto: CreateAbilityDto): Promise<Ability> {
    const exitingAbility = await this.abilityModel.findOne({
      action: createAbilityDto.action,
      subject: createAbilityDto.subject,
    });

    if (exitingAbility) throw new ConflictException('Khả năng đã tồn tại');

    const resultCreate = new this.abilityModel(createAbilityDto);

    await resultCreate.save();

    if (!resultCreate) throw new BadRequestException('Thêm khả năng thất bại');

    return resultCreate;
  }

  async findAll(): Promise<Ability[]> {
    return await this.abilityModel.find();
  }

  async findOne(id: string): Promise<Ability> {
    return await this.abilityModel.findById(id);
  }

  async update(
    id: string,
    updateAbilityDto: UpdateAbilityDto,
  ): Promise<Ability> {
    const resultUpdate = await this.abilityModel.findByIdAndUpdate(
      id,
      updateAbilityDto,
      { new: true },
    );

    if (!resultUpdate)
      throw new BadRequestException('Cập nhật khả năng thất bại');

    return resultUpdate;
  }

  async remove(id: string): Promise<Ability> {
    const resultDelete = await this.abilityModel.findByIdAndDelete(id);

    if (!resultDelete) throw new BadRequestException('Xóa khả năng thất bại');

    return resultDelete;
  }
}
