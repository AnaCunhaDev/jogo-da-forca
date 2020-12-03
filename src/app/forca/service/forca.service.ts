import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForcaService {

  private palavra = [
    ['animal', 'girafa', 'elefante', 'tuiuiu', 'zebra', 'hipopotamo'],
    ['fruta', 'goiaba', 'amora', 'banana', 'melancia', 'jaca']
  ];
  constructor() { }

  EscolhePalavra(min: number, max: number): string[] {
    const num1 = Math.floor(Math.random() * (max - min + 1) + min);
    const num2 = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let resp: string[];
    resp = [this.palavra[num1][0], this.palavra[num1][num2]];

    return resp;
  }
  verificaPalavra(palavraV: string, palavra: string): boolean {
    if (palavra.length === palavraV.length) {
      return palavra === palavraV ? true : false;
    }
    const x = palavra.indexOf(palavraV);
    return x < 0 ? false : true;
  }
  criaLetraExibir(palavra: string): string[] {
    // tslint:disable-next-line: prefer-const
    let r = [];
    let i: number;
    for (i = 0; i < palavra.length; i++) {
      r[i] = '_';
    }

    return r;
  }
  addLetraExibir(palavraV: string, palavra: string, lacunas: string[]): string[] {
    const resp = lacunas;
    let i: number;
    for (i = 0; i < palavra.length; i++) {
      if (palavraV === palavra.charAt(i)) {
        resp[i] = palavraV;
      }
    }
    return resp;
  }
  contaLetras(palavraV: string, palavra: string, letrasAcertadas: number): number {
    let i: number;
    let resp = letrasAcertadas;
    for (i = 0; i < palavra.length; i++) {
      if (palavraV === palavra.charAt(i)) {
        resp++;
      }
    }
    return resp;
  }
  verificaLetrasErradas(palavraV: string, letrasErradas: string[]): boolean{
    let i: number;
    for (i = 0; i < letrasErradas.length; i++) {
      if (palavraV === letrasErradas[i]) {
        return true;
      }
    }
    return false;
  }
}
