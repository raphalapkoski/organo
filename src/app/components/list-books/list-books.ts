import { Component, OnInit } from '@angular/core';
import { Book, Genre } from '../card-book/book';
import { BOOKS } from '../../mock-books';
import { LiteraryGenre } from '../literary-genre/literary-genre';

@Component({
  selector: 'app-list-books',
  imports: [LiteraryGenre],
  templateUrl: './list-books.html',
  styleUrl: './list-books.css'
})
export class ListBooks implements OnInit {
  genres: Genre[] = [];
  bookForGenre: Map<string, Book[]> = new Map<string, Book[]>();

  ngOnInit(): void {
    BOOKS.forEach(book => {
      if(!this.bookForGenre.has(book.genre.id)) {
        this.bookForGenre.set(book.genre.id, []);
      }

      this.bookForGenre.get(book.genre.id)?.push(book);
    });

    this.genres = [
      {
        id: 'romance',
        value: 'Romance',
        books: this.bookForGenre.get('romance') ?? []
      },
      {
        id: 'acao',
        value: 'Ação',
        books: this.bookForGenre.get('acao') ?? []
      }
    ]
  }
}
