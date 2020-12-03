import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Letra } from '../models';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  @Input() fim: boolean;

  @Output() letraEscolhida = new EventEmitter();


  letras: Letra[];



  constructor() { }

  ngOnInit(): void {
    this.inicioJogo();
  }

  inicioJogo(): void {
    let i: number;
    this.letras = [];
    for (i = 0; i < 26; i++) {
      this.letras.push({
        letra: String.fromCharCode(97 + i),
        ativo: false
      });
    }

  }
  pegaLetra(value: string): void {
    const x = this.buscaPosicao(value);
    if (x >= 0) {
      this.letras[x].ativo = true;
    }
    this.letraEscolhida.emit(this.letras[x].letra);
  }
  buscaPosicao(value: string): number {
    let i: number;
    for (i = 0; i < 26; i++) {
      if (value === this.letras[i].letra) {
        return i;
      }
    }
    return -1;
  }
  habilitaBotoes(): void {
    let i: number;
    for (i = 0; i < 26; i++) {
      this.letras[i].ativo = false;
    }
    console.log("Entrei");
  }


}
