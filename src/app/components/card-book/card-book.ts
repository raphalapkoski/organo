import { Component } from '@angular/core';

@Component({
  selector: 'app-card-book',
  imports: [],
  templateUrl: './card-book.html',
  styleUrl: './card-book.css'
})
export class CardBook {
  livro = {
    titulo: 'O Senhor dos Anéis',
    autoria: 'J.R.R. Tolkien',
    image: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg'
  }
}
