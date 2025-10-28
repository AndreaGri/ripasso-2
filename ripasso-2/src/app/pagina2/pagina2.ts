import { Component } from '@angular/core';
import { StudenteService } from '../services/studente-service';

@Component({
  selector: 'app-pagina2',
  imports: [],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 {
  nome1=''
  classe1=''
  media1: any
  constructor(private studentiService: StudenteService) {}

  aggut() {
    this.studentiService.aggStudente(this.nome1,this.classe1,this.media1);
    }
}
