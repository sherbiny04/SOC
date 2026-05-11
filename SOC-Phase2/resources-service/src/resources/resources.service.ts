import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';
import { Types } from 'mongoose';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { Resource, ResourceDocument } from './schemas/resource.schema';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectModel(Resource.name)
    private readonly resourceModel: Model<ResourceDocument>,
  ) {}

  create(createResourceDto: CreateResourceDto) {
    return this.resourceModel.create(createResourceDto);
  }

  findAll() {
    return this.resourceModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string) {
    this.assertValidObjectId(id);
    const resource = await this.resourceModel.findById(id).exec();

    if (!resource) {
      throw new NotFoundException('Resource not found');
    }

    return resource;
  }

  async update(id: string, updateResourceDto: UpdateResourceDto) {
    this.assertValidObjectId(id);
    const resource = await this.resourceModel
      .findByIdAndUpdate(id, updateResourceDto, { new: true })
      .exec();

    if (!resource) {
      throw new NotFoundException('Resource not found');
    }

    return resource;
  }

  async remove(id: string) {
    this.assertValidObjectId(id);
    const resource = await this.resourceModel.findByIdAndDelete(id).exec();

    if (!resource) {
      throw new NotFoundException('Resource not found');
    }

    return resource;
  }

  private assertValidObjectId(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid resource id');
    }
  }
}
