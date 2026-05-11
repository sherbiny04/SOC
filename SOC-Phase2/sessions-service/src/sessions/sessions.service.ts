import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Session, SessionDocument } from './session.schema';

@Injectable()
export class SessionsService {
  constructor(@InjectModel(Session.name) private sessionModel: Model<SessionDocument>) {}

  async create(createSessionDto: any): Promise<Session> {
    const createdSession = new this.sessionModel(createSessionDto);
    return createdSession.save();
  }

  async findAll(): Promise<Session[]> {
    return this.sessionModel.find().exec();
  }

  async findOne(id: string): Promise<Session> {
    const session = await this.sessionModel.findById(id).exec();
    if (!session) {
      throw new NotFoundException(`Session with id ${id} not found`);
    }
    return session;
  }

  async update(id: string, updateSessionDto: any): Promise<Session> {
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
