import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().select('-password -refresh_token');
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel
      .findById(id)
      .select(
        '-password -refresh_token -roles_list -abilities_list -updatedAt',
      );
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const resultUpdate = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .select(
        '-password -refresh_token -balance -ballot -roles_list -abilities_list -updatedAt',
      );

    if (!resultUpdate)
      throw new BadRequestException('Cập nhật thông tin người dùng thất bại');

    return resultUpdate;
  }
}
