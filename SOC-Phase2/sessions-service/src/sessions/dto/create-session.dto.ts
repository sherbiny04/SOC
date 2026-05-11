import { IsString, IsNotEmpty, IsEnum, IsNumber, IsDateString, IsOptional } from 'class-validator';
import { SessionStatus } from '../session.schema';

export class CreateSessionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsEnum(SessionStatus)
  @IsNotEmpty()
  status: SessionStatus;

  @IsNumber()
  @IsNotEmpty()
  participants: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
