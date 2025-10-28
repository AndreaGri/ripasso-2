import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StudenteService } from '../services/studente-service';

@Component({
  selector: 'app-dettaglio-studente',
  imports: [RouterLink],
  templateUrl: './dettaglio-studente.html',
  styleUrl: './dettaglio-studente.css',
})
export class DettaglioStudente {
  studente: any;
  listaStudenti: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentiService: StudenteService
  ) {}

  ngOnInit() {
    this.listaStudenti = this.studentiService.getStudenti();
    this.caricaStudente();
  }

  caricaStudente(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const trovato = this.listaStudenti.find((s) => s.id === id);

    if (trovato) {
      this.studente = trovato;
    } else {
      this.router.navigate(['/pagina3']);
    }
  }

  studenteSuccessivo(): void {
    if (!this.studente) return;

    const indiceCorrente = this.listaStudenti.findIndex(
      (s) => s.id === this.studente.id
    );

    // Se è l'ultimo, puoi decidere se tornare al primo oppure disabilitare
    const prossimo =
      indiceCorrente < this.listaStudenti.length - 1
        ? this.listaStudenti[indiceCorrente + 1]
        : this.listaStudenti[0]; // <-- torna al primo se è l’ultimo

    // naviga verso la nuova route con l'id del prossimo studente
    this.router.navigate(['/pagina3', prossimo.id]);
    
  }
  
}
