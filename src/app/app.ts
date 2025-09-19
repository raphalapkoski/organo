import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CardBook } from './components/card-book/card-book';

@Component({
  selector: 'app-root',
  imports: [
    Header, 
    CardBook,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
