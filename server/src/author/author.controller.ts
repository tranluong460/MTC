import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { CheckAbilities } from '../common/casl-ability.decorator';
import { Action, Subjects } from '../ability/casl-ability.factory';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @CheckAbilities({ action: Action.Create, subject: Subjects.Author })
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }

  @CheckAbilities({ action: Action.Read, subject: Subjects.Author })
  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @CheckAbilities({ action: Action.Read, subject: Subjects.Author })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorService.findOne(id);
  }

  @CheckAbilities({ action: Action.Update, subject: Subjects.Author })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(id, updateAuthorDto);
  }

  @CheckAbilities({ action: Action.Delete, subject: Subjects.Author })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorService.remove(id);
  }
}
