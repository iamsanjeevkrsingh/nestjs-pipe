import { IsInt, IsString } from 'class-validator';

//Validation
export class BookDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
