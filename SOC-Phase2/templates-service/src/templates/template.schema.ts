import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum TemplateCategory {
  AGILE = 'Agile',
  OPERATIONS = 'Operations',
  STRATEGY = 'Strategy',
  DESIGN = 'Design',
}

@Schema({ timestamps: true })
export class Template {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: TemplateCategory, default: TemplateCategory.AGILE })
  category: TemplateCategory;

  @Prop({ default: 0, min: 0 })
  usage: number;

  @Prop()
  description: string;
}

export type TemplateDocument = Template & Document;
export const TemplateSchema = SchemaFactory.createForClass(Template);
