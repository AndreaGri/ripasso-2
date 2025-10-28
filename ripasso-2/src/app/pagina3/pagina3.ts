import { Component, Input } from '@angular/core';
import { Studente } from '../studente/studente';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudenteService } from '../services/studente-service';

@Component({
  selector: 'app-pagina3',
  imports: [Studente,RouterOutlet,RouterLink , Pagina3, CommonModule],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 {
studenti: any[] = [];
constructor(private studentiService: StudenteService) {}
  ngOnInit() {
  this.studenti = this.studentiService.getStudenti();
  }
}