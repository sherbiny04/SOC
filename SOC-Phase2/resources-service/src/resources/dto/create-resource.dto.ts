import { IsEnum, IsString, IsUrl } from 'class-validator';
import { ResourceType } from '../schemas/resource.schema';

export class CreateResourceDto {
  @IsString()
  title: string;

  @IsEnum(ResourceType)
  type: ResourceType;

  @IsUrl({ require_tld: false })
  url: string;

  @IsString()
  description: string;
}
