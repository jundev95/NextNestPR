import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateTestDto {
  @IsOptional()
  @IsString()
  @MaxLength(255, { message: 'Content must not exceed 255 characters' })
  content?: string;
}
