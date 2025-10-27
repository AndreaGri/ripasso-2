import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
import { Pagina3 } from './pagina3/pagina3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Pagina1, Pagina2, RouterLink, Pagina3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ripasso-2');
}
