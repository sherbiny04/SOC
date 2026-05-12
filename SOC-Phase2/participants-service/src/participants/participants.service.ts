import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Participant, ParticipantDocument } from './participant.schema';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';

@Injectable()
export class ParticipantsService {
  constructor(
    @InjectModel(Participant.name)
    private participantModel: Model<ParticipantDocument>,
  ) {}

  async create(createParticipantDto: CreateParticipantDto): Promise<Participant> {
    const created = new this.participantModel(createParticipantDto);
    return created.save();
  }

  async findAll(
    role?: string,
    page?: string,
    limit?: string,
    sortBy?: string,
    order?: string,
  ): Promise<{
    data: Participant[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    const query: any = {};

    if (role) {
      query.role = role;
    }

    const pageNumber = parseInt(page || '1', 10);
    const limitNumber = parseInt(limit || '10', 10);
    const skip = (pageNumber - 1) * limitNumber;

    const sortOption: any = {};
    if (sortBy) {
      sortOption[sortBy] = order === 'desc' ? -1 : 1;
    } else {
      sortOption['createdAt'] = -1;
    }

    const total = await this.participantModel.countDocuments(query).exec();
    const data = await this.participantModel
      .find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber)
      .exec();

    return {
      data,
      total,
      page: pageNumber,
      limit: limitNumber,
      totalPages: Math.ceil(total / limitNumber),
    };
  }

  async findOne(id: string): Promise<Participant> {
    const participant = await this.participantModel.findById(id).exec();
    if (!participant) {
      throw new NotFoundException(`Participant with id ${id} not found`);
    }
    return participant;
  }

  async update(id: string, updateParticipantDto: UpdateParticipantDto): Promise<Participant> {
    const updated = await this.participantModel
      .findByIdAndUpdate(id, updateParticipantDto, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(`Participant with id ${id} not found`);
    }
    return updated;
  }

  async remove(id: string): Promise<Participant> {
    const deleted = await this.participantModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Participant with id ${id} not found`);
    }
    return deleted;
  }
}
