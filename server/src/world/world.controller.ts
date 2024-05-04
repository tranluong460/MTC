import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { WorldService } from './world.service';
import { CreateWorldDto } from './dto/create-world.dto';
import { UpdateWorldDto } from './dto/update-world.dto';
import { CheckAbilities } from '../common/casl-ability.decorator';
import { Action, Subjects } from '../ability/casl-ability.factory';
import { IsPublic } from '../common/public.decorator';

@Controller('world')
export class WorldController {
  constructor(private readonly worldService: WorldService) {}

  @CheckAbilities({ action: Action.Create, subject: Subjects.World })
  @Post()
  create(@Body() createWorldDto: CreateWorldDto) {
    return this.worldService.create(createWorldDto);
  }

  @IsPublic()
  @CheckAbilities({ action: Action.Read, subject: Subjects.World })
  @Get()
  findAll() {
    return this.worldService.findAll();
  }

  @CheckAbilities({ action: Action.Read, subject: Subjects.World })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.worldService.findOne(id);
  }

  @CheckAbilities({ action: Action.Update, subject: Subjects.World })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorldDto: UpdateWorldDto) {
    return this.worldService.update(id, updateWorldDto);
  }

  @CheckAbilities({ action: Action.Delete, subject: Subjects.World })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worldService.remove(id);
  }
}
