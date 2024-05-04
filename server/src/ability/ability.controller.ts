import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { AbilityService } from './ability.service';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { UpdateAbilityDto } from './dto/update-ability.dto';
import { CheckAbilities } from '../common/casl-ability.decorator';
import { Action, Subjects } from './casl-ability.factory';

@Controller('ability')
export class AbilityController {
  constructor(private readonly abilityService: AbilityService) {}

  @CheckAbilities({ action: Action.Create, subject: Subjects.Ability })
  @Post()
  async create(@Body() createAbilityDto: CreateAbilityDto) {
    return await this.abilityService.create(createAbilityDto);
  }

  @CheckAbilities({ action: Action.Read, subject: Subjects.Ability })
  @Get()
  async findAll() {
    return await this.abilityService.findAll();
  }

  @CheckAbilities({ action: Action.Read, subject: Subjects.Ability })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.abilityService.findOne(id);
  }

  @CheckAbilities({ action: Action.Update, subject: Subjects.Ability })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAbilityDto: UpdateAbilityDto,
  ) {
    return await this.abilityService.update(id, updateAbilityDto);
  }

  @CheckAbilities({ action: Action.Delete, subject: Subjects.Ability })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.abilityService.remove(id);
  }
}
