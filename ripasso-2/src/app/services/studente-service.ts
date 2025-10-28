import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {
  studenti = [
  { id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1 },
  { id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3 },
  { id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9 },
  { id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0 },
  { id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7 },
  ];
stud={}
  getStudenti() {
  return this.studenti;
  }
  aggStudente(n: string, c: string, m: number): void {
    const nuovoId = this.studenti.length > 0
      ? Math.max(...this.studenti.map(s => s.id)) + 1
      : 1;


    this.studenti.push({
      id: nuovoId,
      nome: n,
      classe: c,
      mediaVoti: m
    });
  }
}
