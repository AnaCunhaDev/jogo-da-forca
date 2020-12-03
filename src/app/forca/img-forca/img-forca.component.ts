import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-forca',
  templateUrl: './img-forca.component.html',
  styleUrls: ['./img-forca.component.css']
})
export class ImgForcaComponent implements OnInit {



  @Input() vida: number;
  imagem: string;

  constructor() { }

  ngOnInit(): void {
    const x = this.condicaoImagem();
  }

  condicaoImagem(): number {
    let url = 'assets/imagens/forca';
    switch (this.vida) {
      case 6:
        url = url + '0.png';
        break;
      case 5:
        url = url + '1.png';
        break;
      case 4:
        url = url + '2.png';
        break;
      case 3:
        url = url + '3.png';
        break;
      case 2:
        url = url + '4.png';
        break;
      case 1:
        url = url + '5.png';
        break;
      case 0:
        url = url + '6.png';
        break;
    }
    //console.log(url);
    this.imagem = url;
    return this.vida;


  }

}
