import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { FactionService } from './faction.service';
import { CreateFactionDto } from './dto/create-faction.dto';
import { UpdateFactionDto } from './dto/update-faction.dto';
import { CheckAbilities } from '../common/casl-ability.decorator';
import { Action, Subjects } from '../ability/casl-ability.factory';
import { IsPublic } from '../common/public.decorator';

@Controller('faction')
export class FactionController {
  constructor(private readonly factionService: FactionService) {}

  @CheckAbilities({ action: Action.Create, subject: Subjects.Faction })
  @Post()
  create(@Body() createFactionDto: CreateFactionDto) {
    return this.factionService.create(createFactionDto);
  }

  @IsPublic()
  @CheckAbilities({ action: Action.Publish, subject: Subjects.Faction })
  @Get()
  findAll() {
    return this.factionService.findAll();
  }

  @CheckAbilities({ action: Action.Read, subject: Subjects.Faction })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factionService.findOne(id);
  }

  @CheckAbilities({ action: Action.Update, subject: Subjects.Faction })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactionDto: UpdateFactionDto) {
    return this.factionService.update(id, updateFactionDto);
  }

  @CheckAbilities({ action: Action.Delete, subject: Subjects.Faction })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factionService.remove(id);
  }
}
