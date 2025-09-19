import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ListBooks } from './components/list-books/list-books';
import { LiteraryGenre } from './components/literary-genre/literary-genre';

@Component({
  selector: 'app-root',
  imports: [
    Header, 
    ListBooks,
    LiteraryGenre,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
