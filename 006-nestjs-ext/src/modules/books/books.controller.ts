import {
  Controller,
  Get,
} from '@nestjs/common';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  public getBooks(): Promise<BooksDocument[]> {
    return this.booksService.getBooks();
  }
}
