import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum ParticipantRole {
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
  ADMIN = 'admin',
  OBSERVER = 'observer',
}

export type ParticipantDocument = Participant & Document;

@Schema({ timestamps: true })
export class Participant {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, enum: ParticipantRole, default: ParticipantRole.STUDENT })
  role: ParticipantRole;

  @Prop()
  phone: string;
}

export const ParticipantSchema = SchemaFactory.createForClass(Participant);
