import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studente',
  imports: [CommonModule, RouterLink],
  templateUrl: './studente.html',
  styleUrl: './studente.css',
})
export class Studente {
  @Input() nome!: string;
  @Input() classe!: string;
  @Input() media!: number;
  @Input() id!: number
  m= false
  mostra(){
    this.m=!this.m
  }

}
