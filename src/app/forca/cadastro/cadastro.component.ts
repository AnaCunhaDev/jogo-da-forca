import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Palavra } from '../models';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @ViewChild('cadastroPalavra') cadastroPalavra:NgForm;

  palavra: Palavra;
  dicas: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.palavra = new Palavra();
    this.palavra.dica='';
    this.palavra.palavra='';
  }
  listarDicas(): string[]{
    return;
  }
  Cadastrar(): void {
    if(!this.cadastroPalavra.form.valid){
      console.log(this.palavra);
    }

  }

}
