import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { CheckAbilities } from '../common/casl-ability.decorator';
import { Action, Subjects } from '../ability/casl-ability.factory';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @CheckAbilities({ action: Action.Create, subject: Subjects.Role })
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @CheckAbilities({ action: Action.Read, subject: Subjects.Role })
  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @CheckAbilities({ action: Action.Read, subject: Subjects.Role })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(id);
  }

  @CheckAbilities({ action: Action.Update, subject: Subjects.Role })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @CheckAbilities({ action: Action.Delete, subject: Subjects.Role })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(id);
  }
}
