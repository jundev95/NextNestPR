import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateTestDto {
  @IsString()
  @IsNotEmpty({ message: 'Content cannot be empty' })
  @MaxLength(255, { message: 'Content must not exceed 255 characters' })
  content: string;
}
