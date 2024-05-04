import { Model } from 'mongoose';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<Role>) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const exitingRole = await this.roleModel.findOne({
      name: createRoleDto.name,
    });

    if (exitingRole) throw new ConflictException('Vai trò đã tồn tại');

    const resultCreate = new this.roleModel(createRoleDto);

    await resultCreate.save();

    if (!resultCreate) throw new BadRequestException('Thêm vai trò thất bại');

    return resultCreate;
  }

  async findAll(): Promise<Role[]> {
    return await this.roleModel.find();
  }

  async findOne(id: string): Promise<Role> {
    return await this.roleModel.findById(id);
  }

  async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const resultUpdate = await this.roleModel.findByIdAndUpdate(
      id,
      updateRoleDto,
      { new: true },
    );

    if (!resultUpdate)
      throw new BadRequestException('Cập nhật vai trò thất bại');

    return resultUpdate;
  }

  async remove(id: string): Promise<Role> {
    const resultDelete = await this.roleModel.findByIdAndDelete(id);

    if (!resultDelete) throw new BadRequestException('Xóa vai trò thất bại');

    return resultDelete;
  }
}
