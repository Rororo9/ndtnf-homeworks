import {BookTypes} from "../types";
import Book from "./Book";

export default abstract class BooksRepository {
  static books: BookTypes[] = [];

  static createBook(data: BookTypes) {
    this.books.push(new Book(data.title, data.description, data.authors, data.favorite, data.fileCover, data.fileName));
  }

  static getBook(id: number): BookTypes | undefined {
    return this.books.find(book => book.id === id);
  }

  static getBooks(): BookTypes[] {
    return this.books;
  }

  static updateBook(id: number, newTitle: string): BookTypes | false {
    const result = this.books.find(book => book.id === id);

    if (!result) return false;

    result.title = newTitle;

    return result;
  }

  static deleteBook(id: number): true | false {
    const bookIdx = this.books.findIndex(book => book.id === id);

    if (bookIdx === -1) return false;

    this.books.splice(bookIdx, 1);

    return true;
  }

  async getBook(id) {
    
  }
}