import { Component, input } from '@angular/core';
import { CardBook } from '../card-book/card-book';
import { Genre } from '../card-book/book';
import { BOOKS } from '../../mock-books';

@Component({
  selector: 'app-literary-genre',
  imports: [CardBook],
  templateUrl: './literary-genre.html',
  styleUrl: './literary-genre.css'
})
export class LiteraryGenre {
  genre = input.required<Genre>();
  book = BOOKS[0]
}
