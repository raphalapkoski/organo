import { Component, input } from '@angular/core';
import { CardBook } from '../card-book/card-book';
import { Genre } from '../card-book/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-literary-genre',
  imports: [
    CardBook, 
    CommonModule
  ],
  templateUrl: './literary-genre.html',
  styleUrl: './literary-genre.css'
})
export class LiteraryGenre {
  genre = input.required<Genre>();
}
