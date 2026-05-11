import { IsEnum, IsOptional, IsString, IsUrl } from 'class-validator';
import { ResourceType } from '../schemas/resource.schema';

export class UpdateResourceDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsEnum(ResourceType)
  type?: ResourceType;

  @IsOptional()
  @IsUrl({ require_tld: false })
  url?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
