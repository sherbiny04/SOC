import { IsString, IsNotEmpty, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { ParticipantRole } from '../participant.schema';

export class CreateParticipantDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(ParticipantRole)
  @IsNotEmpty()
  role: ParticipantRole;

  @IsString()
  @IsOptional()
  phone?: string;
}
