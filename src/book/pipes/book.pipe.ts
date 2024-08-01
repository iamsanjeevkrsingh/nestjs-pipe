import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BookDto } from '../dto/book.dto';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    //class-transformer convert obj to class
    const bookClass = plainToInstance(BookDto, value);
    //class-validator used to validate in class property
    const errors = await validate(bookClass);
    if (errors.length) {
      throw new BadRequestException(errors);
    }
    return value;
  }
}
