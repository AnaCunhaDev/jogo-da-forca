import { Component, OnInit, ViewChild } from '@angular/core';
import { InputComponent } from './input/input.component';
import { ForcaService } from './service';


@Component({
  selector: 'app-forca',
  templateUrl: './forca.component.html',
  styleUrls: ['./forca.component.css'],
})
export class ForcaComponent implements OnInit {

  @ViewChild(InputComponent) InputComponent: InputComponent;

  dica: string;
  palavra: string;
  tamPalavra: number;


  // palavra que o jogador digita
  palavraV: string;

  // letras erradas.
  letras = [];

  // letras que aparecem na tela
  lacunas: string[];

  // todas as letras
  todas = [];

  // finalização do jogo
  mensagem: string;

  // controle do jogo
  vida = 6;
  contJogadas: number;
  contLetrasAcertadas: number;
  teste: '';

  // controles html
  fim = false;
  inicio = true;

  constructor(private service: ForcaService) { }

  ngOnInit(): void {
    this.inicioJogo();
  }
  ngAfterViewInit(){
    this.InputComponent.habilitaBotoes();
  }
  habilitaBotoes():void {
    this.InputComponent.habilitaBotoes();
    this.inicioJogo();
  }
  inicioJogo(): void {
    const resp = this.service.EscolhePalavra(0, 1);
    this.dica = resp[0];
    this.palavra = resp[1];
    this.tamPalavra = this.palavra.length;
    this.lacunas = this.service.criaLetraExibir(this.palavra);
    this.vida = 6;
    this.contJogadas = 0;
    this.contLetrasAcertadas = 0;
    this.fim = false;
    this.inicio = true;
    this.letras.splice(0, this.letras.length);
    console.log(this.palavra);
  }
  verificaJogada(): void {
    const resp = this.service.verificaPalavra(this.palavraV, this.palavra);
    this.setControles(resp);
    this.setControlesMsg(resp);
    this.palavraV = '';
  }
  setControles(resp: boolean): void {

    if (!resp && this.vida > 0) {
      this.vida--;
      this.adicionaLetraErradas();
    } else if (this.contLetrasAcertadas <= this.palavra.length) {
      this.lacunas = this.service.addLetraExibir(this.palavraV, this.palavra, this.lacunas);
      this.contLetrasAcertadas = this.service.contaLetras(this.palavraV, this.palavra, this.contLetrasAcertadas);
    }
    this.contJogadas++;
  }
  setControlesMsg(resp: boolean): void {
    this.inicio = false;
    if (!resp && this.vida === 0) {
      this.fim = true;
      this.mensagem = 'tragico, você perdeu! a palavra era: ' + this.palavra;
    }
    else if (resp && this.contLetrasAcertadas === this.palavra.length) {
      this.fim = true;
      this.mensagem = 'Parabéns, você conseguiu!';
    }
  }
  adicionaLetraErradas(): void {
    this.letras.push(this.palavraV);
  }
  pegaLetra(novaLetra: string): void {
    this.palavraV = novaLetra;
    this.verificaJogada();

  }

}
