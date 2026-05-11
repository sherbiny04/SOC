import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum SessionStatus {
  UPCOMING = 'upcoming',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export type SessionDocument = Session & Document;

@Schema({ timestamps: true })
export class Session {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, enum: SessionStatus, default: SessionStatus.UPCOMING })
  status: SessionStatus;

  @Prop({ required: true })
  participants: number;

  @Prop({ required: true })
  description: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
