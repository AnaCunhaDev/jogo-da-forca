import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForcaModule } from './forca';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

  BrowserModule,
  FormsModule,
  ForcaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
