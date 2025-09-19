import { Component } from '@angular/core';
import { CardBook } from '../card-book/card-book';
import { Book } from '../card-book/book';
import { BOOKS } from '../../mock-books';

@Component({
  selector: 'app-literary-genre',
  imports: [CardBook],
  templateUrl: './literary-genre.html',
  styleUrl: './literary-genre.css'
})
export class LiteraryGenre {
  book: Book = BOOKS[0];
}
