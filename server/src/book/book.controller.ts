import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';

import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { IsPublic } from '../common/public.decorator';
import { CheckAbilities } from '../common/casl-ability.decorator';
import { Action, Subjects } from '../ability/casl-ability.factory';
import { CustomRequest } from '../interface/request';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @CheckAbilities({ action: Action.Create, subject: Subjects.Book })
  @Post()
  create(@Req() req: CustomRequest, @Body() createBookDto: CreateBookDto) {
    const user = req.user;

    return this.bookService.create(createBookDto, user._id);
  }

  @IsPublic()
  @CheckAbilities({ action: Action.Publish, subject: Subjects.Book })
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @CheckAbilities({ action: Action.Read, subject: Subjects.Book })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @CheckAbilities({ action: Action.Update, subject: Subjects.Book })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @CheckAbilities({ action: Action.Delete, subject: Subjects.Book })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
