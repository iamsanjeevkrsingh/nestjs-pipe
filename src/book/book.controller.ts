import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { BookPipe } from './pipes/book.pipe';

@Controller('book')
export class BookController {
  constructor() {}

  @Get('/:id')
  findBookById(@Param('id', ParseUUIDPipe) id: number): string {
    console.log('🚀 ~ BookController ~ findBookById ~ id:', id, typeof id);
    return `This is book by id ${id}`;
  }

  @Post('/add')
  addBook(@Body(new BookPipe()) book: BookDto): string {
    return 'add book';
  }
}
