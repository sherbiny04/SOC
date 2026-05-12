import { IsString, IsNotEmpty, IsEnum, IsOptional, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { TemplateCategory } from '../template.schema.js';

export class CreateTemplateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(TemplateCategory)
  @IsNotEmpty()
  category: TemplateCategory;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  usage?: number;

  @IsString()
  @IsOptional()
  description?: string;
}
