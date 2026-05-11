import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';

export enum ResourceType {
  VIDEO = 'video',
  DOCUMENT = 'document',
  LINK = 'link',
  IMAGE = 'image',
  OTHER = 'other',
}

export type ResourceDocument = HydratedDocument<Resource>;

@Schema({ timestamps: true })
export class Resource {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({
    required: true,
    enum: Object.values(ResourceType),
    default: ResourceType.OTHER,
  })
  type: ResourceType;

  @Prop({ required: true, trim: true })
  url: string;

  @Prop({ required: true, trim: true })
  description: string;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
