import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { IsPublic } from '../common/public.decorator';
import { CheckAbilities } from '../common/casl-ability.decorator';
import { Action, Subjects } from '../ability/casl-ability.factory';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @CheckAbilities({ action: Action.Create, subject: Subjects.Category })
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @IsPublic()
  @CheckAbilities({ action: Action.Publish, subject: Subjects.Category })
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @IsPublic()
  @CheckAbilities({ action: Action.Read, subject: Subjects.Category })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @CheckAbilities({ action: Action.Update, subject: Subjects.Category })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @CheckAbilities({ action: Action.Delete, subject: Subjects.Category })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
