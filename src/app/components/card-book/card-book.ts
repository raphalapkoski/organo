import { Component, input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-card-book',
  imports: [],
  templateUrl: './card-book.html',
  styleUrl: './card-book.css'
})
export class CardBook {

  book = input.required<Book>();

  defineFavorite(){
    this.book().favorite = !this.book().favorite;
  }
}
