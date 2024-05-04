import { Controller, Get, Body, Patch, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CheckAbilities } from '../common/casl-ability.decorator';
import { Action, Subjects } from '../ability/casl-ability.factory';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @CheckAbilities({ action: Action.Read, subject: Subjects.User })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @CheckAbilities({ action: Action.View, subject: Subjects.User })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @CheckAbilities({ action: Action.Update, subject: Subjects.User })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
}
