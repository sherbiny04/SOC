import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TemplatesService } from './templates.service.js';
import { CreateTemplateDto } from './dto/create-template.dto.js';
import { UpdateTemplateDto } from './dto/update-template.dto.js';
import { TemplateCategory } from './template.schema.js';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Post()
  create(@Body() dto: CreateTemplateDto) {
    return this.templatesService.create(dto);
  }

  @Get()
  findAll(
    @Query('category') category?: TemplateCategory,
    @Query('page') page = '1',
    @Query('limit') limit = '10',
    @Query('sortBy') sortBy = 'createdAt',
    @Query('order') order: 'asc' | 'desc' = 'desc',
  ) {
    return this.templatesService.findAll(
      category,
      Number(page) || 1,
      Number(limit) || 10,
      sortBy,
      order,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templatesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTemplateDto) {
    return this.templatesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.templatesService.remove(id);
  }
}
