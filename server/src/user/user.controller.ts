import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Req,
  BadRequestException,
} from '@nestjs/common';

import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from '../common/public.decorator';
import { CheckAbilities } from '../common/casl-ability.decorator';
import { Action, Subjects } from '../ability/casl-ability.factory';
import { CustomRequest } from '../interface/request';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @CheckAbilities({ action: Action.Read, subject: Subjects.User })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @IsPublic()
  @CheckAbilities({ action: Action.Publish, subject: Subjects.User })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @CheckAbilities({ action: Action.Update, subject: Subjects.User })
  @Patch(':id')
  update(
    @Req() req: CustomRequest,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = req.user;

    if (user._id.toString() !== id)
      throw new BadRequestException(
        'Bạn không được phép cập nhật người dùng này',
      );

    return this.userService.update(id, updateUserDto);
  }
}
