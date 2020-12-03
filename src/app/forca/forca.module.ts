import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForcaComponent } from './forca.component';
import { ForcaService } from './service';
import { FormsModule } from '@angular/forms';
import { ImgForcaComponent } from './img-forca/img-forca.component';
import { InputComponent } from './input/input.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    ForcaComponent,
    ImgForcaComponent,
    InputComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ForcaComponent,
    CadastroComponent
  ],
  providers: [
    ForcaService
  ]
})
export class ForcaModule { }
