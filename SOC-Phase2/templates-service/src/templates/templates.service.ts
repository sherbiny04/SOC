import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, SortOrder } from 'mongoose';
import { Template, TemplateDocument, TemplateCategory } from './template.schema.js';
import { CreateTemplateDto } from './dto/create-template.dto.js';
import { UpdateTemplateDto } from './dto/update-template.dto.js';

@Injectable()
export class TemplatesService {
  constructor(
    @InjectModel(Template.name)
    private readonly templateModel: Model<TemplateDocument>,
  ) {}

  async create(dto: CreateTemplateDto) {
    const created = new this.templateModel(dto);
    return created.save();
  }

  async findAll(
    category?: TemplateCategory,
    page = 1,
    limit = 10,
    sortBy = 'createdAt',
    order: 'asc' | 'desc' = 'desc',
  ) {
    const filter: Record<string, unknown> = {};
    if (category) filter.category = category;

    const skip = (page - 1) * limit;
    const sort: Record<string, SortOrder> = { [sortBy]: order === 'desc' ? -1 : 1 };

    const [data, total] = await Promise.all([
      this.templateModel.find(filter).sort(sort).skip(skip).limit(limit).exec(),
      this.templateModel.countDocuments(filter).exec(),
    ]);

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const template = await this.templateModel.findById(id).exec();
    if (!template) throw new NotFoundException(`Template ${id} not found`);
    return template;
  }

  async update(id: string, dto: UpdateTemplateDto) {
    const template = await this.templateModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    if (!template) throw new NotFoundException(`Template ${id} not found`);
    return template;
  }

  async remove(id: string) {
    const template = await this.templateModel.findByIdAndDelete(id).exec();
    if (!template) throw new NotFoundException(`Template ${id} not found`);
    return { deleted: true, id };
  }
}
