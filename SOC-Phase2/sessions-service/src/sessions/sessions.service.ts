import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Session, SessionDocument } from './session.schema';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Injectable()
export class SessionsService {
  constructor(@InjectModel(Session.name) private sessionModel: Model<SessionDocument>) {}

  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const createdSession = new this.sessionModel(createSessionDto);
    return createdSession.save();
  }

  async findAll(
    status?: string,
    startDate?: string,
    endDate?: string,
    page?: string,
    limit?: string,
    sortBy?: string,
  ): Promise<{ data: Session[]; total: number; page: number; limit: number; totalPages: number }> {
    const query: any = {};

    if (status) {
      query.status = status;
    }

    if (startDate || endDate) {
      query.date = {};
      if (startDate) {
        query.date.$gte = new Date(startDate);
      }
      if (endDate) {
        query.date.$lte = new Date(endDate);
      }
    }

    const pageNumber = parseInt(page || '1', 10);
    const limitNumber = parseInt(limit || '10', 10);
    const skip = (pageNumber - 1) * limitNumber;

    let sortOption: any = {};
    if (sortBy) {
      // expected format: field=desc or field=asc
      const [field, order] = sortBy.split('=');
      sortOption[field] = order === 'desc' ? -1 : 1;
    } else {
      sortOption['createdAt'] = -1; // Default sorting assuming timestamps are enabled
    }

    const total = await this.sessionModel.countDocuments(query).exec();
    const data = await this.sessionModel
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

  async findOne(id: string): Promise<Session> {
    const session = await this.sessionModel.findById(id).exec();
    if (!session) {
      throw new NotFoundException(`Session with id ${id} not found`);
    }
    return session;
  }

  async update(id: string, updateSessionDto: UpdateSessionDto): Promise<Session> {
    const updatedSession = await this.sessionModel.findByIdAndUpdate(
      id,
      updateSessionDto,
      { new: true }
    ).exec();
    
    if (!updatedSession) {
      throw new NotFoundException(`Session with id ${id} not found`);
    }
    return updatedSession;
  }

  async remove(id: string): Promise<Session> {
    const deletedSession = await this.sessionModel.findByIdAndDelete(id).exec();
    if (!deletedSession) {
      throw new NotFoundException(`Session with id ${id} not found`);
    }
    return deletedSession;
  }
}
